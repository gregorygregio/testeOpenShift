console.log("running");

const express = require('express');
// const bodyParser = require('body-parser');

// const moduloProduto = require('./src/controllers/produtoController');
// const moduloVenda = require('./src/controllers/vendasController');

const app = express();
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded( {extended:false} ))

app.get("/teste", (req,res) => {
  res.send("Funfando")
})

//
// moduloProduto(app);
// moduloVenda(app);

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

app.listen(port, ip);
console.log('Server running on http://%s:%s', ip, port);
module.exports = app ;
