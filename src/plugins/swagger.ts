import fp from 'fastify-plugin'
import fastifySwagger from '@fastify/swagger'

export default fp(async (fastify) => {
  fastify.register(fastifySwagger, {
    routePrefix: '/docs',
    exposeRoute: true,
    staticCSP: true,
    openapi: {
      info: {
        title: 'Fastify API',
        version: '1.0.0'
      }
    }
  })
})
