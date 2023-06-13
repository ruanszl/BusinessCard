import { FastifyRequest } from 'fastify'
import { admin } from '../lib/firebase'

export async function cookieVerification (request: FastifyRequest) {
    try {
        const sessionCookie = request.cookies.session || '';
        const response = await admin.auth().verifySessionCookie(sessionCookie, true);
        const uid = response.uid;
        request.locals = request.locals || {};
        request.locals.uid = uid;
    } catch (error) {
        console.log(error);
        return null;
    }
}