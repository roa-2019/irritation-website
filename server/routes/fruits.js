const express = require('express')

const db = require('../db')

const router = express.Router()

const request = require('superagent')

router.get('/fruits', (req, res) => {
  db.getFruits()
    .then(results => {
      res.json({fruits: results.map(fruit => fruit.name)})
    })
})

router.get('/get-advice', (req, res) => {
  request.get('https://api.adviceslip.com/advice')
    .then((advice) => {
      res.json(advice)
    })
})

module.exports = router
