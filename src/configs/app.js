const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const routes = require('../routes')

class App{
    constructor(){
        this.server = express();
        this.middlewares();
        this.routers();
    }

    middlewares(){
        this.server.use(express.json())
        this.server.use(cors())
        this.server.use(helmet())
    }

    routers(){
        this.server.use(routes)
    }
}

module.exports = new App().server