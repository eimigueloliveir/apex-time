import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const user = await prisma.users.findFirst({
    where: {
      email: body?.email,
      password: body?.password,
    },
  });

  if (!user) {
    return {
      status: 401,
      body: {
        message: "Invalid credentials",
      },
    };
  }

  await setUserSession(event, {
    id: user.id,
    name: user.name,
    email: user.email,
  });

  return await prisma.users.findMany({
    include: {
      tasks: true,
    },
  });
});
