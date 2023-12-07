import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const { id, title, content, status, date } = await readBody(event);

  const { id: UserId } = await getUserSession(event);

  await prisma.task.update({
    where: {
      id: id,
    },
    data: {
      title: title,
      content: content,
      status: status,
      userId: UserId,
      date: new Date(date).toISOString(),
    },
  });

  return { statusCode: 200, statusMessage: "Atualizado com sucesso!" };
});
