import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import * as filesRepository from "../repositories/filesRepository.js";
import * as titleService from "../services/filesServices.js";

export async function insertCredential(req: Request, res: Response) {
    const { title, url, user, password }: filesRepository.Credentials = req.body;
    const userId : number = res.locals.user.id;

    const virificatedTitle = await titleService.newTitleCredential(userId, title);

    const data = { title: virificatedTitle, url, user, password };

    await filesRepository.insertCredential(data, userId);

    res.status(201).send({message: "CredentialPass created successfully"});   
}

export async function insertNote(req: Request, res: Response) {
    const { title, note }: filesRepository.Notes = req.body;
    const userId : number = res.locals.user.id;

    const virificatedTitle = await titleService.newTitleNote(userId, title);

    const data = { title: virificatedTitle, note };

    await filesRepository.insertNote(data, userId);

    res.status(201).send({message: "NotePass created successfully"});   
}

export async function insertCard(req: Request, res: Response) {
    const { title, number, holdername, cvv, expiration_date, password, virtual }: filesRepository.Cards = req.body;
    const userId : number = res.locals.user.id;

    const virificatedTitle = await titleService.newTitleCard(userId, title);

    const data = { title: virificatedTitle, number, holdername, cvv, expiration_date, password, virtual };

    await filesRepository.insertCard(data, userId);

    res.status(201).send({message: "CardPass created successfully"});   
}

export async function insertWifi(req: Request, res: Response) {
    const { title, name, password }: filesRepository.Wifi = req.body;
    const userId : number = res.locals.user.id;

    const virificatedTitle = await titleService.newTitleWifi(userId, title);

    const data = { title: virificatedTitle, name, password };

    await filesRepository.insertWifi(data, userId);

    res.status(201).send({message: "WifiPass created successfully"});
}