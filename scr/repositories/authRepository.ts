import prisma from "../data/database.js";
import { Users } from "@prisma/client";
export type CreateUsersData= Omit<Users, "id">

export interface Credentials {
  email: string;
  password: string;
}

export async function newUser(dataUser: Credentials) {
  await prisma.users.create({data: dataUser})
}

// export async function searchUser(email: string) {
//   const dataUser = await prisma.users.findUnique({where: {email}})
//   return dataUser;
// }

export async function searchUser(id: number) {
  try {
    return await prisma.users.findMany({where: {id}}).catch((e) => console.log(e))
  } catch(e) {
    console.log(e)
  }
}

export async function insertToken(userId: number, token: string) {
  await prisma.sessions.create({data: {userId, token}})
}
