import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../lib/prisma";
import { cookieVerification } from "../middleware/cookieVerification";

export async function createNewTopic(fastify: FastifyInstance){
    
    fastify.post('/newCard', { onRequest: cookieVerification }, async (request, reply) => {
        const createTopicBody = z.object({
            instagram: z.string().nullable(),
            facebook: z.string().nullable(),
            linkedin: z.string().nullable(),
            youtube: z.string().nullable(),
            github: z.string().nullable(),
            twitter: z.string().nullable(),
            site: z.string().nullable(),
        })
        try {
            const { facebook } = createTopicBody.parse(request.body);
            const { github } = createTopicBody.parse(request.body);
            const { instagram } = createTopicBody.parse(request.body);
            const { linkedin } = createTopicBody.parse(request.body);
            const { site } = createTopicBody.parse(request.body);
            const { twitter } = createTopicBody.parse(request.body);
            const { youtube } = createTopicBody.parse(request.body);
            const uid = request.locals.uid;

            const user = await prisma.user.findFirst({
                where: { 
                    uid: uid 
                },
            });

            if(user){
                await prisma.businessCard.create({
                    data:{
                        facebook,
                        github,
                        instagram,
                        linkedin,
                        site,
                        twitter,
                        youtube,
                        user: {
                            connect: { id: user.id },
                        },
                    }
                })
            }else{
                console.log("User Not Found");
                return reply.status(404).send();
            }
            
            return reply.status(201).send();
        } catch (error) {
            console.log(error);
        }     
    })
    
}
