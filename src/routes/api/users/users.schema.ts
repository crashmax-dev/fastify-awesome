import { z } from 'zod'
import { buildJsonSchemas } from 'fastify-zod'

const userSchema = z.object({
  // id: z.number({
  //   required_error: 'Id is required'
  // }),
  email: z.string({
    required_error: 'Email is required'
  }),
  name: z.optional(z.string())
})

export const { schemas, $ref } = buildJsonSchemas({
  userSchema: z.array(userSchema)
})
