import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const { id } = await getUserSession(event);

  await prisma.task.create({
    data: {
      ...body,
      userId: id,
    },
  });

  return { statusCode: 200, statusMessage: "Deletado com sucesso!" };
});
