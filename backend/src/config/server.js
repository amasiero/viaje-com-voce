const port = 3003

const bodyParser = require('body-parser')
const express = require('express')

const app = express()
const allowCors = require('./cors')

// Aplicando library ao servidor
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(allowCors)

// Inicializando o app
app.listen(port, function() {
  console.log(`Viaje-Com-Voce Backend is running in port ${port}.`)
})

module.exports = app
