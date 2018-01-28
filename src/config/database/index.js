const mongoose = require('mongoose')
console.log("abrindo database ")
console.log("abrindo database ")
console.log("abrindo database ")
console.log("abrindo database ")
console.log("abrindo database ")
mongoose.connect("mongodb://localhost/registroDeVendas",{ useMongoClient: true})

console.log("conectado database ")
mongoose.connection.on('open', function (ref) {
  console.log('Connected to mongo server.');
});
mongoose.connection.on('error', function (err) {
  console.log('Could not connect to mongo server!');
  console.log(err);
});



mongoose.Promise = global.Promise;




module.exports = mongoose;
