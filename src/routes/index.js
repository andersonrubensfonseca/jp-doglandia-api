const {Router} = require('express')
const userRouter = require('./users')

const AuthController = require('../controllers/AuthController')
const routers = new Router()

const authController = new AuthController();

routers.get('/',(request, response)=>{
    return response.json({message:"Online"})
})
routers.post('/login', authController.login)
routers.use('/users',userRouter)

module.exports = routers