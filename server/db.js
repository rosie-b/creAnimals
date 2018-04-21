const environment = process.env.NODE_ENV || 'development'
const config = require('./../knexfile')[environment]
const connection = require('knex')(config)


function getAllAnimals (testConn) {
  const conn = testConn || connection
  return conn('Animals').select()
}

function getAllCreAnimals (testConn) {
  const conn = testConn || connection
  return conn('CreAnimals').select()
}

function getAllSounds (testConn) {
  const conn = testConn || connection
  return conn('Sounds').select()
}

module.exports = {
  getAllAnimals,
  getAllCreAnimals,
  getAllSounds     
}