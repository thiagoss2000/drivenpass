import * as filesRepository from "../repositories/filesRepository.js";
import { newTitle } from "../utils/verificateTitleUtil.js";

export async function newTitleCredential(userId: number, title: string) {
    const dataDb = await filesRepository.findAllCredential(userId);
    
    return newTitle(dataDb, title, "Site");
}

export async function deletedCredential(tableId: number, userId: number) {
    const dataDb = await filesRepository.findCredentialId(tableId);

    if (dataDb.userId !== userId) throw {status: 401, message: "invalid data"}; 
    
    await filesRepository.deletedCredential(tableId);
}

export async function findCredential(tableId: number, userId: number) {
    const dataDb = await filesRepository.findCredentialId(tableId);

    if (dataDb.userId !== userId) throw {status: 401, message: "invalid data"}; 
    
    return dataDb;
}