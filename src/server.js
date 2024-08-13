const app = require('./configs/app')
const http = require('http')

const server  = http.createServer(app);

server.listen(3333,()=>{
    console.log('rodando na 3333')
})
