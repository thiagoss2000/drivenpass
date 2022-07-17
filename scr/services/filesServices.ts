import { findAllCard, findAllCredential, findAllNote, findAllWifi } from "../repositories/filesRepository.js";
import { newTitle } from "../utils/verificateTitleUtil.js";

export async function newTitleCredential(userId: number, title: string) {
    const titleDb = await findAllCredential(userId);
    
    return newTitle(titleDb, title, "Site");
}

export async function newTitleNote(userId: number, title: string) {
    const titleDb = await findAllNote(userId);
    
    return newTitle(titleDb, title, "Note");
}

export async function newTitleCard(userId: number, title: string) {
    const titleDb = await findAllCard(userId);
    
    return newTitle(titleDb, title, "Card");
}

export async function newTitleWifi(userId: number, title: string) {
    const titleDb = await findAllWifi(userId);
    
    return newTitle(titleDb, title, "Wifi");
}