const router = require('express').Router();
const Venda = require('../models/Venda')


router.post("/efetuar", async(req, res)=> {
  const produtos = req.body.produtos;
  await Venda.create({ produtos }, (err,venda) => {
      if (err) {
          res.status(500).send({error:"Erro ao registrar venda"});
          console.log(err)
          return;
      }
      res.send(`Venda registrada com sucesso: ${ venda._id }: ${ venda.data}`)
  });
})

router.get("/listar", async (req, res) => {
      const vendas = await Venda.aggregate([
            {
              $lookup:
                 {
                    from: "produtos",
                    localField: "produtos.produtoId",
                    foreignField: "_id",
                    as: "fromProdutos"
                }
           },
           {
             $project:{
               produtos:[{quantidade:["$produtos.quantidade","$produtos.produtoId"], produto:"$fromProdutos"}]
             }
           }

         ],

         (err, vendas) => {
              if (err) {
                  res.status(500).send({error:"Erro ao Obter vendas"});
                  console.log(err)
                  return;
              }

              res.send(vendas)
      });

})

module.exports = app => app.use("/vendas",router);
