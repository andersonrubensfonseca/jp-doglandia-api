const {Router} = require('express')
const UserController = require('../../controllers/UserController')

const userRouter = new Router();
const userController = new UserController();


userRouter.get('/', userController.index)




module.exports = userRouter