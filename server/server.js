const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const croutes = require('./routes/croutes')

const server = express()

// Middleware
server.use(express.json())
server.use(express.static(path.join(__dirname, '../public')))
server.use(bodyParser.json())


// Routes
server.use('/api/v1/', croutes)

module.exports = server
