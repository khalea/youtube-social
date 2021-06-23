const express = require('express')
const { isObject } = require('util')
const app = express()
const server = require('http').createServer(app)
const port = 3001

server.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})

app.get('/', (req, res) => {
    res.send('<h3>Connected to server.</h3>')
})

const { Server } = require('socket.io')
const io = new Server(server)

// Custom Connection

io.on('connection', (socket) => {
    console.log('Incoming connection made')
    socket.emit('connection', null) // Only emitted to new client
})