const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const croutes = require('./routes/croutes')

const server = express()

// Middleware
server.use(express.json())
server.use(express.static(path.join(__dirname, '../public')))
server.use(bodyParser.json())
server.use(cors({origin: 'http://localhost:8080'}))

// Routes
server.use(express.static(path.join(__dirname, '../public')))
server.use('/api/v1', croutes)

module.exports = server
