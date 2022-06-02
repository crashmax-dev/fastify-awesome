import fp from 'fastify-plugin'

type JsonSchema = {
  $id: string
}

declare module 'fastify' {
  interface FastifyInstance {
    addSchemas(schemas: JsonSchema[]): void
  }
}

export default fp(async (fastify) => {
  const addSchemas = (schemas: JsonSchema[]) => {
    for (const schema of schemas) {
      fastify.addSchema(schema)
      fastify.log.info(schema, 'Schema loaded')
    }
  }

  fastify.decorate('addSchemas', addSchemas)
})
