import { FastifyInstance } from "fastify";
import { cookieVerification } from "../middleware/cookieVerification";
import { prisma } from "../lib/prisma";

export async function userInfo(fastify: FastifyInstance) {
  fastify.get('/user', { onRequest: cookieVerification }, async (request, reply) => {
    try {
      const uid = request.locals.uid;
      const user = await prisma.user.findFirst({
          where: { 
              uid: uid 
          },
      });
      return reply.status(200).send(user);
  } catch (error) {
      console.log(error);
      reply.status(500).send();
  }
  })
}