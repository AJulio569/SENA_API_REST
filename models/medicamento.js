
const mongoose = require('mongoose');

const medicamentoSchema = mongoose.Schema({
    idMedicamento: { 
        type: String,
        required: true
    },
    nombreM:{ 
        type: String,
        required: true
    },
    descripcionM: {
        type: String,
        required: true
      
    },
    fechaVencimiento: {
        type: String,
        required: true
    },
    fechaRegistro: {
        type: String,
        required: true
    },
    laboratorio: {
        type: String,
        required: true
    },
    cantidad: {
        type: String,
        required: true
    }

});
module.exports = mongoose.model('medicamento',medicamentoSchema);