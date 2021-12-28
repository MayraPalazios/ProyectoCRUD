const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Valor = new Schema({
    NC: String,
    Nombre: String,
    App: String,
    Apm: String

});
module.exports=mongoose.model('valores', Valor);