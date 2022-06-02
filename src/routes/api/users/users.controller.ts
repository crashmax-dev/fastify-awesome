import { findUsers } from './users.service.js'

export async function getUsersHandler() {
  const users = await findUsers({
    select: {
      // id: true,
      email: true,
      name: true
    }
  })

  return users
}
