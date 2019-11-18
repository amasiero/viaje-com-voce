const VCV = require('./vcv')

VCV.methods(['get', 'post', 'put', 'delete'])
VCV.updateOptions({
  new: true,
  runValidators: true
})

module.exports = VCV
