const http = require('http')
const express = require('express')
require('express-async-errors')
const app = express()
const cors = require('cors')

const namesRouter = require('./routes/names')
const middleware = require('./utilities/middleware')
const logger = require('./utilities/logger')
const config = require('./utilities/config')

app.use(cors())
app.use(express.json())
app.use(middleware.requestLogger)

app.use('/api/names', namesRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app