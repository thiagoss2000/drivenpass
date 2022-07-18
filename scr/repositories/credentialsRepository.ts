import prisma from "../data/database.js";
import { connection } from "../data/db.js";

export interface Credentials {
  title: string;
  url: string;
  user: string;
  password: string;
  //userId: number;
}

export async function insertCredential(data: Credentials, userId: number) {
    const { title, url, user, password } = data;
    await connection.query(`INSERT INTO "Credentials" (title, url, "userLogin", password, "userId") VALUES ($1, $2, $3, $4, $5)`,
    [title, url, user, password, userId]);
}

export async function findAllCredential(userId: number) {
    const dataUser = await connection.query(`SELECT * FROM "Credentials" WHERE "userId" = $1`, [userId])
    return dataUser.rows;
}

export async function findCredentialId(tableId: number) {
    const dataUser = await connection.query(`SELECT * FROM "Credentials" WHERE id = $1`, [tableId])
    return dataUser.rows[0];
}

export async function deletedCredential(tableId: number) {
    await connection.query(`DELETE FROM "Credentials" WHERE id = $1`, [tableId]);
}