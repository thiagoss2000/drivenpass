import prisma from "../data/database.js";
import { Users } from "@prisma/client";
export type CreateUsersData= Omit<Users, "id">

export interface LogInUser {
  email: string;
  password: string;
}

export async function newUser(dataUser: LogInUser) {
  // await prisma.users.create({data: dataUser})
}

export async function searchUser(email: string) {
  // const dataUser = await prisma.users.findUnique({where: {email}})
  const dataUser = {id: 1, email: 'fkd', password: 'gfdfa'}
  return dataUser;
}

export async function insertToken(userId: number, token: string) {
  // await prisma.sessions.create({data: {userId, token}})
}
