const restful = require('node-restful')
// Node-Restful cria uma casca sobre o mongoose permitindo
// que ele seja acessado.
const mongoose = restful.mongoose

const productSchema = new mongoose.Schema({
  name : { type : String,  required : true },
  description : { type : String,  required : true },
  value : { type : Number, required : true },
  image : { type : String, required : true}
});

module.exports = restful.model('Product', productSchema)
