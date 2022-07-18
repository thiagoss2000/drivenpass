import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

import {
  newUser,
  searchUser,
  insertToken,
  LogInUser,
} from "../repositories/authRepository.js";

dotenv.config();

export async function signUp(req: Request, res: Response) {
  const { email, password }: LogInUser = req.body;

  const hashPassword = bcrypt.hashSync(password,10);

  const userData = await searchUser(email);
  
  console.log(userData)
  if (userData) throw {status: 409, message: "user exists"};
  
  await newUser({ email, password: hashPassword });

  res.status(201).send({message: "User created successfully"});   
}

export async function signIn (req: Request, res: Response){
  const { email, password }: LogInUser = req.body;

  const verifyUser = await searchUser(email);

  if(!verifyUser || !bcrypt.compareSync(password, verifyUser.password))
    throw {status: 401, message: "invalid data"};      
    
  const data = { id: verifyUser.id }
  const config = { expiresIn: "1h" };
  const token= jwt.sign(data ,process.env.ENCRYPTPASSWORD, config);

  await insertToken(verifyUser.id, token);

  const user = {
    id: verifyUser.id,
    email: verifyUser.email,
    token: token
  }

  res.status(200).send({ message: "Login successful", user });    
}