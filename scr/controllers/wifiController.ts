import { Request, Response } from "express";
import * as filesRepository from "../repositories/filesRepository.js";
import { deletedWifi, findWifi, newTitleWifi } from "../services/WifiServices.js";

export async function insertWifi(req: Request, res: Response) {
    const { title, name, password }: filesRepository.Wifi = req.body;
    const userId : number = res.locals.user.id;

    const virificatedTitle = await newTitleWifi(userId, title);

    const data = { title: virificatedTitle, name, password };

    await filesRepository.insertWifi(data, userId);

    res.status(201).send({message: "WifiPass created successfully"});
}

export async function getWifisAll(req: Request, res: Response) {
    const userId : number = res.locals.user.id;

    const data = await filesRepository.findAllWifi(userId);

    res.send(data);   
}

export async function getWifisId(req: Request, res: Response) {
    const userId : number = res.locals.user.id;
    const tableId = req.params.id;

    const data = await findWifi(parseInt(tableId), userId);

    if(!data) throw {status: 404, message: "incorrect data"};

    res.send(data);   
}

export async function deletedWifisId(req: Request, res: Response) {
    const userId : number = res.locals.user.id;
    const tableId = req.params.id;

    await deletedWifi(parseInt(tableId), userId);
}