import * as filesRepository from "../repositories/filesRepository.js";
import { newTitle } from "../utils/verificateTitleUtil.js";

export async function newTitleCard(userId: number, title: string) {
    const dataDb = await filesRepository.findAllCard(userId);
    
    return newTitle(dataDb, title, "Card");
}

export async function deletedCard(tableId: number, userId: number) {
    const dataDb = await filesRepository.findCardId(tableId);

    if (dataDb.userId !== userId) throw {status: 401, message: "invalid data"};      

    await filesRepository.deletedCard(tableId);
}

export async function findCard(tableId: number, userId: number) {
    const dataDb = await filesRepository.findCardId(tableId);

    if (dataDb.userId !== userId) throw {status: 401, message: "invalid data"};      

    return dataDb;
}