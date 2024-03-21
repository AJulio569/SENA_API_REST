const mongoose = require('mongoose');

const animalSchema = mongoose.Schema({
    idAnimal: { 
        type: String,
        required: true
    },
    edad:{ 
        type: String,
        required: true
    },
    sexo: {
        type: String,
        required: true
      
    },
    raza: {
        type: String,
        required: true
    },
    peso: {
        type: String,
        required: true
    },
    estadoReproductivo: {
        type: String,
        required: true
    }

});
module.exports = mongoose.model('animal',animalSchema);