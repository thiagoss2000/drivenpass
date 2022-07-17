import { Request, Response } from "express";
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


export async function getCredentialsAll(req: Request, res: Response) {
    const userId : number = res.locals.user.id;

    const data = await filesRepository.findAllCredential(userId);

    res.send(data);   
}

export async function getNotesAll(req: Request, res: Response) {
    const userId : number = res.locals.user.id;

    const data = await filesRepository.findAllNote(userId);

    res.send(data);   
}

export async function getCardsAll(req: Request, res: Response) {
    const userId : number = res.locals.user.id;

    const data = await filesRepository.findAllCard(userId);

    res.send(data);   
}

export async function getWifisAll(req: Request, res: Response) {
    const userId : number = res.locals.user.id;

    const data = await filesRepository.findAllWifi(userId);

    res.send(data);   
}


export async function getCredentialsId(req: Request, res: Response) {
    const userId : number = res.locals.user.id;
    const tableId = req.params.id;

    const data = await filesRepository.findCredentialId(parseInt(tableId), userId);

    if(!data) throw {status: 404, message: "incorrect data"};

    res.send(data);   
}

export async function getNotesId(req: Request, res: Response) {
    const userId : number = res.locals.user.id;
    const tableId = req.params.id;

    const data = await filesRepository.findNoteId(parseInt(tableId), userId);

    if(!data) throw {status: 404, message: "incorrect data"};

    res.send(data);   
}

export async function getCardsId(req: Request, res: Response) {
    const userId : number = res.locals.user.id;
    const tableId = req.params.id;

    const data = await filesRepository.findCardId(parseInt(tableId), userId);

    if(!data) throw {status: 404, message: "incorrect data"};

    res.send(data);   
}

export async function getWifisId(req: Request, res: Response) {
    const userId : number = res.locals.user.id;
    const tableId = req.params.id;

    const data = await filesRepository.findWifiId(parseInt(tableId), userId);

    if(!data) throw {status: 404, message: "incorrect data"};

    res.send(data);   
}