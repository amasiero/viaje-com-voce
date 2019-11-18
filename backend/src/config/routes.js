const express = require('express')

module.exports = function(app) {

  const router = express.Router()
  app.use('/api', router)

  const vcvService = require('../api/vcv/vcvService')
  vcvService.register(router, '/viaje')
}
