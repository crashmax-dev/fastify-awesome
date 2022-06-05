---
to: src/routes/api/<%= name %>/<%= name %>.controller.ts
---
import { } from './<%= name %>.service.js'
import type { } from '@prisma/client'
import type { FastifyReply, FastifyRequest } from 'fastify'

export async function getHandler(
  request: FastifyRequest,
  reply: FastifyReply
) { }

export async function postHandler(
  request: FastifyRequest,
  reply: FastifyReply
) { }
