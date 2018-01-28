console.log("running");

const express = require('express');
const bodyParser = require('body-parser');

// const moduloProduto = require('./src/controllers/produtoController');
// const moduloVenda = require('./src/controllers/vendasController');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended:false} ))

app.get("/teste", (req,res) => {
  res.send("Funfando")
})


// moduloProduto(app);
// moduloVenda(app);

app.listen(8080);
