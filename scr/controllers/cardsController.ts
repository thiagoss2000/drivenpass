import { Request, Response } from "express";
import * as filesRepository from "../repositories/filesRepository.js";
import { deletedCard, findCard, newTitleCard } from "../services/CardsServices.js";

export async function insertCard(req: Request, res: Response) {
    const { title, number, holdername, cvv, expiration_date, password, virtual }: filesRepository.Cards = req.body;
    const userId : number = res.locals.user.id;

    const virificatedTitle = await newTitleCard(userId, title);

    const data = { title: virificatedTitle, number, holdername, cvv, expiration_date, password, virtual };

    await filesRepository.insertCard(data, userId);

    res.status(201).send({message: "CardPass created successfully"});   
}

export async function getCardsAll(req: Request, res: Response) {
    const userId : number = res.locals.user.id;

    const data = await filesRepository.findAllCard(userId);

    res.send(data);   
}

export async function getCardsId(req: Request, res: Response) {
    const userId : number = res.locals.user.id;
    const tableId = req.params.id;

    const data = await findCard(parseInt(tableId), userId);

    if(!data) throw {status: 404, message: "incorrect data"};

    res.send(data);   
}

export async function deletedCardsId(req: Request, res: Response) {
    const userId : number = res.locals.user.id;
    const tableId = req.params.id;

    await deletedCard(parseInt(tableId), userId);
}