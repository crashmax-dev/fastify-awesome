import { prisma } from '../../../utils/prisma.js'
import type { Prisma } from '@prisma/client'

export async function findUsers(args?: Prisma.UserFindManyArgs) {
  const users = await prisma.user.findMany(args)
  return users
}
