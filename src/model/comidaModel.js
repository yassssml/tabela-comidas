import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const findAll = async () => {
  return await prisma.comida.findMany({
    orderBy: { nome: "asc" },
  });
};

export const findOne = async (id) => {
  return await prisma.comida.findUnique({
    where: { id: Number(id) },
  });
};
