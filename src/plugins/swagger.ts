import fp from 'fastify-plugin'
import fastifySwagger from '@fastify/swagger'
// import { withRefResolver } from 'fastify-zod'

export default fp(async (fastify) => {
  fastify.register(fastifySwagger, {
    routePrefix: '/docs',
    exposeRoute: true,
    staticCSP: true,
    openapi: {
      info: {
        title: 'Fastify API',
        description: 'API for some products',
        version: '1.0.0'
      }
    }
  })
})
