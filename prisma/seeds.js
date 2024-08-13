// seed.js

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Dados dos usuários para seed
  const users = [
    { name: 'Alice', email: 'alice@example.com', password: 'password1' },
    { name: 'Bob', email: 'bob@example.com', password: 'password2' },
    { name: 'Charlie', email: 'charlie@example.com', password: 'password3' },
    { name: 'David', email: 'david@example.com', password: 'password4' },
    { name: 'Eve', email: 'eve@example.com', password: 'password5' },
    { name: 'Frank', email: 'frank@example.com', password: 'password6' },
    { name: 'Grace', email: 'grace@example.com', password: 'password7' },
    { name: 'Hannah', email: 'hannah@example.com', password: 'password8' },
    { name: 'Ivy', email: 'ivy@example.com', password: 'password9' },
    { name: 'Jack', email: 'jack@example.com', password: 'password10' },
  ];

  // Cria os usuários no banco de dados
  for (const userData of users) {
    await prisma.user.create({
      data: {
        ...userData,
        active: true, // Define o status como ativo por padrão
        createdAt: new Date(),
      },
    });
  }

  console.log('Seed data inserted successfully.');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
