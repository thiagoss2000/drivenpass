import prisma from "../data/database.js";
import { connection } from "../data/db.js";

export interface Cards {
  title: string;
  number: number;
  holdername: string;
  cvv: string;
  expiration_date: string;
  password: string;
  virtual: boolean;
  //userId: number;
}

export async function insertCard(data: Cards, userId: number) {
    const { title, number, holdername, cvv, expiration_date, password, virtual } = data;
    // await connection.query(`INSERT INTO "Cards" 
    // (title, number, holdername, cvv, expiration_date, password, "is_virtual", "userId") 
    // VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
    // [title, number, holdername, cvv, expiration_date, password, virtual, userId]);
    await prisma.cards.create({data:{title, number, holdername, cvv, expiration_date, password, is_virtual: virtual, userId}})
}

export async function findAllCard(userId: number) {
    // const dataUser = await connection.query(`SELECT 
    // title, number, holdername, "is_virtual", "userId" 
    // FROM "Cards" WHERE "userId" = $1`, [userId])
    const dataUser = await prisma.cards.findMany({where:{userId}})
    return dataUser;
}

export async function findCardId(tableId: number) {
    // const dataUser = await connection.query(`SELECT * FROM "Cards" WHERE id = $1`, [tableId])
    const dataUser = await prisma.cards.findUnique({where:{id: tableId}})
    return dataUser;
}

export async function deletedCard(tableId: number) {
    // await connection.query(`DELETE FROM "Cards" WHERE id = $1`, [tableId]);
    await prisma.cards.delete({where:{id: tableId}})
}