import * as filesRepository from "../repositories/filesRepository.js";
import { newTitle } from "../utils/verificateTitleUtil.js";

export async function newTitleNote(userId: number, title: string) {
    const dataDb = await filesRepository.findAllNote(userId);
    
    return newTitle(dataDb, title, "Note");
}

export async function deletedNote(tableId: number, userId: number) {
    const dataDb = await filesRepository.findNoteId(tableId);

    if (dataDb.userId !== userId) throw {status: 401, message: "invalid data"};  
    
    await filesRepository.deletedNote(tableId);
}

export async function findNote(tableId: number, userId: number) {
    const dataDb = await filesRepository.findNoteId(tableId);

    if (dataDb.userId !== userId) throw {status: 401, message: "invalid data"};  

    return dataDb;
}