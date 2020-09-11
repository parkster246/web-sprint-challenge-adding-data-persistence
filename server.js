const express = require('express')

const [ROUTER]= require('./routers/[ROUTER.js]') //CHANGE321

const server = express()

server.use(express.json())
server.use(helmet())
server.use('/api/[ROUTER_PATH]', [ROUTER]) //CHANGE321

server.get('/', (req, res) => {
  res.status(200).json({ Victor_Frankenstein: 'It LIVEEEESSSSSSS' })
})

module.exports = server