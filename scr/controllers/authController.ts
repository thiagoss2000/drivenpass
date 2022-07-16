import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import chalk from "chalk";

import {
  newUser,
  searchUser,
  insertToken,
} from "../repositories/authRepository.js";

dotenv.config();

interface credentials {
    email: string;
    password: string;
}

export async function signUp(req: Request, res: Response) {
    const { email, password, }: credentials = req.body;
    const hashPassword= bcrypt.hashSync(password,10);
    try{
        await newUser(email, hashPassword);
        res.status(201).send({message: "User created successfully"});
    } catch(err){
        console.log(chalk.red(`${err}`));

        if(err.message.includes("duplicate key value violates unique constraint"))
            return res.status(409).send("User already exists");

        res.status(500).send(err.message);
    }
}

export async function login (req: Request, res: Response){
    try{
        const {email,password}: credentials = req.body;

        const verifyUser = await searchUser(email);
        console.table(verifyUser.rows)

        if(verifyUser.rows.length === 0){
            res.status(401).send({message: "User not found..."});
            return;
        }

        if(!bcrypt.compareSync(password, verifyUser.rows[0].password)){
            res.status(401).send({message : "Wrong password..." });
            return;
        }
        

        const data = {id: verifyUser.rows[0].id, name: verifyUser.rows[0].name}

        const config = { expiresIn: "1m" };
        const token= jwt.sign(data ,process.env.ENCRYPTPASSWORD, config);

        await insertToken(verifyUser.rows[0].id,token);

        const user = {
            id : verifyUser.rows[0].id,
            email : verifyUser.rows[0].email
        }

        const response = { token: token, user: user };

        res.status(200).send({ message: "Login successful", ...response });
    }
    catch(e){
        console.log(e);
        res.sendStatus(500);
    }
}
