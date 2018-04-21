const express = require('express')
const router = express.Router()

const db = require('../db')

router.get('/', function (req, res) {
    console.log('getting the db')
  db.getCreAnimals()
    .then(creAnimals => {
        console.log("I have the data! " + creAnimals)
        res.json(creAnimals)
    })
})

module.exports = router