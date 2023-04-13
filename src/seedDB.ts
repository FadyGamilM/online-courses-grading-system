import { PrismaClient } from '../prisma/client';
import { add } from "date-fns";

// instantiate a prisma clinet instance
const prisma = new PrismaClient();

// define a main function to be the entry point of all our work and to be able to use the async await
async function main()
{
   // clean up the database
   // await prisma.user.deleteMany({});
   // await prisma.course.deleteMany({});
   // await prisma.test.deleteMany({});


   // const newUser = await prisma.user.create({
   //    data: {
   //       firstName: "fady",
   //       lastName: "gamil",
   //       email: "gamilfady605@gmail.com",
   //       username: "fadyGamil",
   //       password: "fady_gamil_password",
   //       socialMedia: {
   //          "facebook": "gamilfady10@gmail.com",
   //          "instagram": "fadiigamiil"
   //       }
   //    }
   // });
   let fady = await prisma.user.findFirst({ where: { email: "gamilfady605@gmail.com" } });

   let afterOneMonth = add(new Date(), { months: 1 });
   let afterTwoMonths = add(new Date(), { months: 2 });
   let afterHalfYear = add(new Date(), { months: 6 });

   const newCourse = await prisma.course.create({
      data: {
         title: "Learning Frontend Development With React.js",
         description: "learn react hooks, react component lifecycle and how to use typescript with react",
         duration: 12,
         tests: {
            create: [

               {
                  title: "half year",
                  testDate: afterHalfYear,
               }
            ]
         },
         members: {
            create: {
               userRole: "STUDENT",
               member: {
                  connect: {
                     id: fady?.id
                  }
               }
            }
         }
      }
   });
   console.log(newCourse);

   // const newCourse = await prisma.course.create({
   //    data: {
   //       title: "Learning Backend Development With Node.js, Typescript, Prisma as an ORM, Postgresql",
   //       description: "this course will teach you everything you need to know about prisma integration with your nodejs rest api, how to work with typescript in a clean way",
   //       duration: 5,
   //       tests: {
   //          create: [
   //             {
   //                title: "monthly_#1",
   //                testDate: afterOneMonth,
   //             },
   //             {
   //                title: "mid term",
   //                testDate: afterTwoMonths,
   //             },
   //             {
   //                title: "half year",
   //                testDate: afterHalfYear,
   //             }
   //          ]
   //       },
   //       members: {
   //          create: {
   //             userRole: 'STUDENT',
   //             member: {
   //                connect: {
   //                   id: fady?.id,
   //                   email: fady?.email
   //                }
   //             }
   //          }
   //       },
   //    },
   //    include: {
   //       _count: true,
   //       members: {
   //          include: {
   //             member: true
   //          }
   //       }
   //    }
   // });
   // console.log(newCourse);
};

// call the main function to seed the data 
main().catch((err: Error) => { }).finally(async () => { await prisma.$disconnect(); });  