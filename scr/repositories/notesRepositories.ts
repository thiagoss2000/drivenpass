import prisma from "../data/database.js";
import { connection } from "../data/db.js";

export interface Notes {
  title: string;
  note: string;
  //userId: number;
}

export async function insertNote(data: Notes, userId: number) {
    const { title, note } = data;
    await connection.query(`INSERT INTO "Notes" (title, note, "userId") VALUES ($1, $2, $3)`,
    [title, note, userId]);
}

export async function findAllNote(userId: number) {
    const dataUser = await connection.query(`SELECT * FROM "Notes" WHERE "userId" = $1`, [userId])
    return dataUser.rows;
}

export async function findNoteId(tableId: number) {
    const dataUser = await connection.query(`SELECT * FROM "Notes" WHERE id = $1`, [tableId])
    return dataUser.rows[0];
}

export async function deletedNote(tableId: number) {
    await connection.query(`DELETE FROM "Notes" WHERE id = $1`, [tableId]);
}