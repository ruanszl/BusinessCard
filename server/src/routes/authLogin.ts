import { FastifyInstance } from "fastify";
import { z } from "zod";

import { admin } from "../lib/firebase";
import { prisma } from "../lib/prisma";

export async function authLogin(fastify: FastifyInstance) {
    
    fastify.get('/auth', async (request, reply) => {
        const createUserHeaders = z.object({
            Authorization: z.string().min(1),
        })
        const { Authorization } = createUserHeaders.parse({ Authorization: request.headers.authorization});
        // Separa o token do prefixo Bearer
        const token = Authorization.split(' ')[1];
        
        try {
            const sessionCookieOptions = {
                expiresIn: 60 * 60 * 24 * 7 * 1000, // 1 semana em segundos
            };
            const cookie = await admin.auth().createSessionCookie(token, sessionCookieOptions);
            
            reply.setCookie('session', cookie,{
                path: '/',
                domain: 'localhost',
                httpOnly: false,
                secure: true,
                sameSite: 'strict',
                expires: new Date(Date.now()+ sessionCookieOptions.expiresIn),
            })
            try {
                const decodedClaims = await admin.auth().verifySessionCookie(cookie, true);
                const uid = decodedClaims.uid;
                
                const existingUser = await prisma.user.findFirst({
                    where: {
                        uid: uid,
                    },
                });
                    
                if (existingUser) {
                    reply.send('User Already Exist!');
                } else {
                    const name = decodedClaims.name
                    const picture = decodedClaims.picture
                    const email = decodedClaims.email
                    const phone = decodedClaims.phone_number
                    await prisma.user.create({
                        data: {
                        uid,
                        name,
                        picture,
                        email,
                        phone,
                        },
                    });
                reply.send('Create user with Sucessfull');
                }                          
            } catch (error) {
                console.log(error);
            }
        } catch (error) {
            console.log(error);
        }
    })
}