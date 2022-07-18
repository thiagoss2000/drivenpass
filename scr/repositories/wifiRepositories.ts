import prisma from "../data/database.js";
import { connection } from "../data/db.js";

export interface Wifi {
  title: string;
  name: string;
  password: string;
  //userId: number;
}

export async function insertWifi(data: Wifi, userId: number) {
    const { title, name, password } = data;
    await connection.query(`INSERT INTO "Wifi" (title, name, password, "userId") VALUES ($1, $2, $3, $4)`,
    [title, name, password, userId]);
}

export async function findAllWifi(userId: number) {
    const dataUser = await connection.query(`SELECT * FROM "Wifi" WHERE "userId" = $1`, [userId])
    return dataUser.rows;
}

export async function findWifiId(tableId: number) {
    const dataUser = await connection.query(`SELECT * FROM "Wifi" WHERE id = $1`, [tableId])
    return dataUser.rows[0];
}

export async function deletedWifi(tableId: number) {
    await connection.query(`DELETE FROM "Wifi" WHERE id = $1`, [tableId]);
}