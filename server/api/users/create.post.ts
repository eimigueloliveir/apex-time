import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  let emailIsValid =
    (await prisma.users.count({
      where: {
        email: body.email,
      },
    })) == 0;

  if (!emailIsValid) {
    return { statusCode: 400, statusMessage: "Email já cadastrado!" };
  }

  return await prisma.task.findMany({
    where: {
      userId: 1,
    },
  });
});
