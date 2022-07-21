import prisma from "../data/database.js";
import { Users } from "@prisma/client";
import { connection } from "../data/db.js";

export type CreateUsersData= Omit<Users, "id">

export interface LogInUser {
  email: string;
  password: string;
}

export async function newUser(dataUser: LogInUser) {
  await prisma.users.create({data: dataUser})
  //await connection.query(`INSERT INTO "Users" (email, password) VALUES ($1, $2)`, [dataUser.email, dataUser.password])
}

export async function searchUser(email: string) {
  const dataUser = await prisma.users.findUnique({where: {email}})
  //const dataUser = await connection.query(`SELECT * FROM "Users" WHERE email = $1`, [email])
  // return dataUser.rows[0];
  return dataUser;
}

export async function insertToken(userId: number, token: string) {
  await prisma.sessions.updateMany({where:{userId}, data:{deleted_at: new Date()}});
  await prisma.sessions.create({data: {userId, token}})
  // await connection.query(`UPDATE "Sessions" SET deleted_at = $2 WHERE "userId" = $1 AND deleted_at IS NULL`, [userId, new Date()])
  // await connection.query(`INSERT INTO "Sessions" ("userId", token) VALUES ($1, $2)`, [userId, token])
}
