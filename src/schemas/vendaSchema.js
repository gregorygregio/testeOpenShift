const mongoose = require("../config/database/");


const vendaSchema = new mongoose.Schema({
    data: { type: Date, default: new Date(), required: true},
    produtos: [ {
                  quantidade: {type: Number, required: true},
                  produtoId: {type: mongoose.Schema.ObjectId, required: true}
                }
              ]
});


module.exports = vendaSchema;
