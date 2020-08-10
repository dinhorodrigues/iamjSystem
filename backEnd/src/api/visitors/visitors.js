const nodeRestful = require('node-restful')
const mongoose = nodeRestful.mongoose

const visitors = new mongoose.Schema({
    dataCad: { type: Date, default: Date.now}, 
    name: { type: String, required: true, uppercase: true },
    sexo: { type: String, required: false },
    celular: { type: String, required:false},
    email: { type: String, required: false },
    cep: { type: String, required: false, },
    convite:{type: String, required: false},
    obs: {type: String, required: false},
    logradouro: { type: String, required: false, uppercase: true },
    numCasa: { type: Number, required: false },
    complemento: { type: String, required: false, uppercase: true },
    bairro: { type: String, required: false, uppercase: true },
    localidade: { type: String, required: false, uppercase: true },
    referen: { type: String, required: false, uppercase: true }
})
module.exports = nodeRestful.model('Visitors', visitors)
