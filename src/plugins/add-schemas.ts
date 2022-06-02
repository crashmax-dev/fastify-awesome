import fp from 'fastify-plugin'
import type { JsonSchema } from 'fastify-zod'

declare module 'fastify' {
  interface FastifyInstance {
    addSchemas(schemas: unknown[]): void
  }
}

export default fp(async (fastify) => {
  const addSchemas = (schemas: JsonSchema<''>[]) => {
    for (const schema of schemas) {
      fastify.addSchema(schema)
      fastify.log.info(`Schema loaded: ${schema.$id}`)
    }
  }

  fastify.decorate('addSchemas', addSchemas)
})
