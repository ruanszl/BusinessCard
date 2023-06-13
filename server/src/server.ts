import Fastify from 'fastify';
import cors from '@fastify/cors';

import cookie from '@fastify/cookie';

import { createNewTopic } from './routes/createNewTopic';
import { authLogin } from './routes/authLogin';
import { logout } from './routes/logout';
import { userInfo } from './routes/userInfo';

async function bootstrap() {
  const fastifyInstance = Fastify({
    logger: true,
  });

  await fastifyInstance.register(cookie);
  await fastifyInstance.register(cors, {
    origin: true,
    credentials: true,
  });
  await fastifyInstance.register(userInfo);
  await fastifyInstance.register(authLogin);
  await fastifyInstance.register(createNewTopic);
  await fastifyInstance.register(logout);
  
  await fastifyInstance.listen({ port: 3333 });
}

bootstrap();
