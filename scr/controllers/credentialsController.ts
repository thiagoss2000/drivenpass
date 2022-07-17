import { Request, Response } from "express";
import * as filesRepository from "../repositories/filesRepository.js";
import { deletedCredential, findCredential, newTitleCredential } from "../services/CredentialsServices.js";

export async function insertCredential(req: Request, res: Response) {
    const { title, url, user, password }: filesRepository.Credentials = req.body;
    const userId : number = res.locals.user.id;

    const virificatedTitle = await newTitleCredential(userId, title);

    const data = { title: virificatedTitle, url, user, password };

    await filesRepository.insertCredential(data, userId);

    res.status(201).send({message: "CredentialPass created successfully"});   
}

export async function getCredentialsAll(req: Request, res: Response) {
    const userId : number = res.locals.user.id;

    const data = await filesRepository.findAllCredential(userId);

    res.send(data);   
}

export async function getCredentialsId(req: Request, res: Response) {
    const userId : number = res.locals.user.id;
    const tableId = req.params.id;

    const data = await findCredential(parseInt(tableId), userId);

    if(!data) throw {status: 404, message: "incorrect data"};

    res.send(data);   
}

export async function deletedCredentialsId(req: Request, res: Response) {
    const userId : number = res.locals.user.id;
    const tableId = req.params.id;

    await deletedCredential(parseInt(tableId), userId);
}