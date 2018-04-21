const express = require('express')
const router = express.Router()

const db = require('../db')

router.get('/', (req, res) => {
  console.log('get')
  db.getAllCreAnimals()
  .then(creAnimals => {
      console.log(creAnimals)
      res.json(creAnimals)
  })
})

// router.get('/', function (req, res) {
//   console.log('get')
// db.getAllAnimals()
//   .then(animals => {
//       console.log(animals)
//       res.json(animals)
//   })
// })

// router.get('/', function (req, res) {
//   console.log('get')
// db.getAllSounds()
//   .then(sounds => {
//       console.log(sounds)
//       res.json(sounds)
//   })
// })

module.exports = router