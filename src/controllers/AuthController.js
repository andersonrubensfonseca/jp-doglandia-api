const UserService = require('../services/UserService')

class AuthController{
    async login(req,res){
        const { email, password} = req.body
        const userService = new UserService()
        const user = await userService.getUserBy({email});
        if(!user || user.password !== password){
            return res.status(400).json({message: 'Credenciais Erradas!'})
        }
        return res.status(200).json(user)
    }
}

module.exports = AuthController