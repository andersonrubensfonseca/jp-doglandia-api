const UserService = require('../services/UserService')

class UserController{
    async index(req,res){
        const userService = new UserService()
        const users = await userService.getUsers();

        return res.json(users)
    }

}

module.exports = UserController;