const mongoose = require('mongoose');

const tratamientoSchema = mongoose.Schema({
    idTratamiento: {
        type: String,
        required: true
    },
    dosis: {
        type: String,
        required: true
    },
    medicamento: {
        type: String,
        required: true

    },
    fechaAdnision: {
        type: String,
        required: true
    },
    fechaTratamiento: {
        type: String,
        required: true
    }


});
module.exports = mongoose.model('tratamiento', tratamientoSchema);