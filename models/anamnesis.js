const mongoose = require('mongoose');

const anamnesisSchema = mongoose.Schema({
    idAnamnesis: { 
        type: String,
        required: true
    },
    sintoma:{ 
        type: String,
        required: true
    },
    fecha: {
        type: String,
        required: true
      
    }

});
module.exports = mongoose.model('anamnesis',anamnesisSchema);