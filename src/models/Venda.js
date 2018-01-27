const mongoose = require("../config/database/");
const vendaSchema = require('../schemas/vendaSchema')

const model = mongoose.model('Venda',vendaSchema);



module.exports = model
