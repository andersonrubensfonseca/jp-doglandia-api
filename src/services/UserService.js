const { PrismaClient } = require('@prisma/client')
const BaseRepository = require('../repositories/BaseRepository')

class UserService{
    constructor(){
        let prisma = new PrismaClient();
        this.userRepository = new BaseRepository(prisma, 'User');
    }

    async createUser(data) {
        try {
          const newUser = await this.userRepository.create(data);
          return newUser;
        } catch (error) {
          console.error('Error creating user:', error);
        }
      }

      async getUser(userId) {
        try {
          const user = await this.userRepository.findById(userId);
          return user
        } catch (error) {
          console.error('Error retrieving user:', error);
        }
      }
      async getUserBy(data){
        return await this.userRepository.find(data)
      }
      async getUsers(){
        const users = await this.userRepository.findAll()
        return users
      }
}

module.exports = UserService;   