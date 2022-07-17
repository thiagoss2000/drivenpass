import prisma from "../data/database.js";

export interface Credentials {
  title: string;
  url: string;
  user: string;
  password: string;
}
export interface Notes {
  title: string;
  note: string;
}
export interface Cards {
  title: string;
  number: number;
  holdername: string;
  cvv: number;
  expiration_date: string;
  password: string;
  virtual: boolean;
}
export interface Wifi {
  title: string;
  name: string;
  password: string;
}

export async function insertCredential(data: Credentials, userId: number) {

}

export async function findAllCredential(userId: number) {
    return []
}

export async function findCredentialId(CredentialId: number, userId: number) {
}


export async function insertNote(data: Notes, userId: number) {

}

export async function findAllNote(userId: number) {
    return []
}

export async function findNoteId(CredentialId: number, userId: number) {
}


export async function insertCard(data: Cards, userId: number) {

}

export async function findAllCard(userId: number) {
    return []
}

export async function findCardId(CredentialId: number, userId: number) {
}


export async function insertWifi(data: Wifi, userId: number) {
}

export async function findAllWifi(userId: number) {
    return []
}

export async function findWifiId(CredentialId: number, userId: number) {
}