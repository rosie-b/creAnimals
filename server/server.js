const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const croutes = require('./routes/croutes')// connect to routes.js file

const server = express()

// Middleware
server.use(express.json())
server.use(express.static(path.join(__dirname, '../public')))
server.use(bodyParser.json())
server.use('/api/v1', croutes) // connect the api url to the server side routes

module.exports = server
