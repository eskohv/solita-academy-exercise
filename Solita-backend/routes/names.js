const router = require('express').Router()
require('express-async-errors')
const names = require('../names.json')

router.get('/', async (request, response) => {
    response.json(names)
})

module.exports = router