import { PrismaClient } from '../prisma/client';

// instantiate a prisma clinet instance
const prisma = new PrismaClient();

// define a main function to be the entry point of all our work and to be able to use the async await
async function main()
{
};

// call the main function to seed the data 
main().catch((err: Error) => { }).finally(async () => { await prisma.$disconnect(); }); 