import { FastifyInstance } from "fastify";
import { admin } from "../lib/firebase";

export async function logout(fastify: FastifyInstance) {
    fastify.post('/logout', async (request, reply) =>{
        try {
            const sessionCookie = request.cookies.session || '';
            reply.clearCookie('session');
            await admin.auth().verifySessionCookie(sessionCookie)
            .then((decodeClaims)=>{
                return admin.auth().revokeRefreshTokens(decodeClaims.sub)
            })
            .then(()=>{
                return true;
            })
            .catch((error) =>{
                console.log(error);
                return true;
            })
        } catch (error) {
            console.log(error);
        }
    })
}