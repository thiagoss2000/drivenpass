import { Request, Response } from "express";
import * as filesRepository from "../repositories/notesRepositories.js";
import { deletedNote, findNote, newTitleNote } from "../services/NotesServices.js";

export async function insertNote(req: Request, res: Response) {
    const { title, note }: filesRepository.Notes = req.body;
    const userId : number = res.locals.user.id;

    const virificatedTitle = await newTitleNote(userId, title);

    const data = { title: virificatedTitle, note };

    await filesRepository.insertNote(data, userId);

    res.status(201).send({message: "NotePass created successfully"});   
}

export async function getNotesAll(req: Request, res: Response) {
    const userId : number = res.locals.user.id;

    const data = await filesRepository.findAllNote(userId);

    res.send(data);   
}

export async function getNotesId(req: Request, res: Response) {
    const userId : number = res.locals.user.id;
    const tableId = req.params.id;

    const data = await findNote(parseInt(tableId), userId);

    if(!data) throw {status: 404, message: "incorrect data"};

    res.send(data);   
}

export async function deletedNotesId(req: Request, res: Response) {
    const userId : number = res.locals.user.id;
    const tableId = req.params.id;

    await deletedNote(parseInt(tableId), userId);
    res.status(200).send({message: "NotesPass deleted successfully"});   
}