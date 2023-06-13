import { FastifyRequest } from 'fastify';

declare module 'fastify' {
  interface FastifyRequest {
    locals: Record<string, any>;
  }
}
