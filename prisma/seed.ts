import { PrismaClient } from '@prisma/client'
import type { User } from '@prisma/client'

const users: User[] = [
  {
    id: 1,
    name: 'crashmax',
    email: 'sys@crashmax.ru'
  }
]

const prisma = new PrismaClient()

async function main() {
  for (const user of users) {
    await prisma.user.create({
      data: user
    })
  }
}

main()
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
