import { test } from 'tap'
import { buildServer } from '../dist/server.js'

test('GET /healthcheck', async (t) => {
  const fastify = buildServer()
  const response = await fastify.inject({
    method: 'GET',
    path: '/healthcheck'
  })

  t.same(await response.json(), { ok: true })
})
