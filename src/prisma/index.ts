//Conexão com o BD

import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();

export default prismaClient;