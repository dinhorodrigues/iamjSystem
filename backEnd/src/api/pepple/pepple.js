const nodeRestful = require('node-restful')
const mongoose = nodeRestful.mongoose



const cliente = new mongoose.Schema({

    code: { type: Number, required: true },
    name: { type: String, required: true, uppercase: true },
    cpf: { type: String, required: false, max: 15 },
    rg: { type: Number, requiered: false },
    dataNas: { type: Date, required: true },
    sexo: { type: String, required: true },
    sexy: { type: String, required: false },
    celular: { type: String, required: true },
    email: { type: String, required: false },
    cep: { type: String, required: false, },
    logradouro: { type: String, required: true, uppercase: true },
    numCasa: { type: Number, required: true },
    complemento: { type: String, required: false, uppercase: true },
    bairro: { type: String, required: true, uppercase: true },
    localidade: { type: String, required: false, uppercase: true },
    referen: { type: String, required: true, uppercase: true }


})
module.exports = nodeRestful.model('Pepple', cliente)