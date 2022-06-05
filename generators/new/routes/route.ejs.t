---
to: src/routes/api/<%= name %>/<%= name %>.route.ts
---
import {
  getHandler,
  postHandler
} from './<%= name %>.controller.js'
import { schemas, $ref } from './<%= name %>.schema.js'
import type { FastifyInstance, FastifyPluginAsync } from 'fastify'

const <%= name %>: FastifyPluginAsync = async (fastify: FastifyInstance): Promise<void> => {
  fastify.get('/', getHandler)
  fastify.post('/', postHandler)

  fastify.addSchemas(schemas)
}

export default <%= name %>
