const environment = process.env.NODE_ENV || 'development'
const config = require('./../knexfile')[environment]
const connection = require('knex')(config)


// get all data sitting in the CreAnimals table
function getCreAnimals (testConn) {
  const conn = testConn || connection
  return conn('CreAnimals').select()
}

module.exports = {
  getCreAnimals     
}