import * as filesRepository from "../repositories/filesRepository.js";
import { newTitle } from "../utils/verificateTitleUtil.js";

export async function newTitleWifi(userId: number, title: string) {
    const dataDb = await filesRepository.findAllWifi(userId);
    
    return newTitle(dataDb, title, "Wifi");
}

export async function deletedWifi(tableId: number, userId: number) {
    const dataDb = await filesRepository.findWifiId(tableId);

    if (dataDb.userId !== userId) throw {status: 401, message: "invalid data"};      

    await filesRepository.deletedWifi(tableId);
}

export async function findWifi(tableId: number, userId: number) {
    const dataDb = await filesRepository.findWifiId(tableId);

    if (dataDb.userId !== userId) throw {status: 401, message: "invalid data"};      

    return dataDb;
}