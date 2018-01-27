const mongoose = require("../config/database/");
const produtoSchema = require('../schemas/produtoSchema')

const model = mongoose.model('Produto',produtoSchema);



module.exports = model
