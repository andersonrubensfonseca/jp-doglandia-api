class BaseRepository {
    constructor(prismaClient, modelName) {
      this.prisma = prismaClient;
      this.model = modelName;
    }
  
    async create(data) {
      return this.prisma[this.model].create({ data });
    }
  
    async findById(id) {
      return this.prisma[this.model].findUnique({ where: { id } });
    }

    async find(data){
      return this.prisma[this.model].findUnique({ where: data });
    }
  
    async findAll() {
      return this.prisma[this.model].findMany();
    }
  
    async update(id, data) {
      return this.prisma[this.model].update({
        where: { id },
        data,
      });
    }
  
    async delete(id) {
      return this.prisma[this.model].delete({ where: { id } });
    }
  }
  
  module.exports = BaseRepository;
  