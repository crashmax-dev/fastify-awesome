import 'dotenv/config'
import Fastify from 'fastify'
import fastifyAutoload from '@fastify/autoload'
import { joinPath } from './utils/path.js'

export function buildServer() {
  const fastify = Fastify({
    logger: {
      enabled: process.env.NODE_ENV === 'development',
      transport: {
        target: 'pino-pretty',
        options: {
          ignore: 'time,pid,hostname',
          singleLine: true,
          colorize: true
        }
      }
    }
  })

  fastify.register(fastifyAutoload, {
    dir: joinPath(import.meta, 'plugins')
  })

  fastify.register(fastifyAutoload, {
    dir: joinPath(import.meta, 'routes'),
    ignorePattern: /.*(controller|service|schema).(ts|js)/
  })

  return fastify
}
