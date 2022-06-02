import { schemas, $ref } from './users.schema.js'
import { getUsersHandler } from './users.controller.js'
import type { FastifyPluginAsync } from 'fastify'

const users: FastifyPluginAsync = async (fastify): Promise<void> => {
  fastify.get(
    '/',
    {
      schema: {
        response: {
          200: $ref('userSchema')
        }
      }
    },
    getUsersHandler
  )

  fastify.addSchemas(schemas)
}

export default users
