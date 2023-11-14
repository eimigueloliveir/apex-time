import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const { id, ...body } = await readBody(event);

  await prisma.task.update({
    where: {
      id: id,
    },
    data: {
        ...body,
        userId: 1
    }
  });

  return { statusCode: 200, statusMessage: "Atualizado com sucesso!"};
});
