const mongoose = require("../config/database/");


const produtoSchema = new mongoose.Schema({
    plu:{type: Number, required: true, unique: true},
    commercialDescription: {type: String, required: true},
    price: {type: Number, required: true},
    stock: {type: Number, required: true, default: 0}
});


module.exports = produtoSchema;
