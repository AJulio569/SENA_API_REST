const mongoose = require('mongoose');

const personaSchema = mongoose.Schema({
    ID: { 
        type: String,
        required: true
    },
    nombre:{ 
        type: String,
        required: true
    },
    apellidos: {
        type: String,
        required: true
      
    },
    telefono: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }

});
module.exports = mongoose.model('persona',personaSchema);