const router = require('express').Router();
const Produto = require('../models/Produto')


router.post("/cadastrar", async (req, res) => {
    const plu = req.body.plu;
    const commercialDescription = req.body.commercialDescription;
    const price = req.body.price;

    await Produto.create({ plu, commercialDescription, price },(err, produtoCriado) => {
        if (err){
          console.log(err);
          res.status(500).send({error: "Erro ao criar produto"})
          return;
        }

        res.send(`Produto ${produtoCriado.commercialDescription} criado com sucesso`)
    });
})

router.get("/listar", async (req, res) => {
    const produtos = await Produto.find().exec();
    res.send(produtos);
});

router.get("/getProduto/:plu", async (req, res) => {
    const plu = req.params.plu;
    const produto = await Produto.findOne({ plu }).exec();

    res.send(produto);
})

module.exports = app => app.use("/produtos", router);
