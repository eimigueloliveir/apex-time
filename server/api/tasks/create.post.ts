import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  await prisma.task.create({
    data: {
      ...body,
      userId: 1,
    },
  });

  return { statusCode: 200, statusMessage: "Deletado com sucesso!" };
});
