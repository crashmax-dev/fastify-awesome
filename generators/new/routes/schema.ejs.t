---
to: src/routes/api/<%= name %>/<%= name %>.schema.ts
---
import { z } from 'zod'
import { buildJsonSchemas } from 'fastify-zod'

export const { schemas, $ref } = buildJsonSchemas({ })
