import { z } from 'zod'
import { buildJsonSchemas } from 'fastify-zod'

const userSchema = z.object({
  email: z.string({
    required_error: 'Email is required'
  }),
  name: z.optional(z.string())
})

export const { schemas, $ref } = buildJsonSchemas({
  userSchema: z.array(userSchema)
})
