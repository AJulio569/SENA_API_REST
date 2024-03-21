const mongoose = require('mongoose');

const rolSchema = mongoose.Schema({
    idRol: {
        type: String,
        required: true
    },
    nombreRol: {
        type: String,
        required: true
    },
    descripcionRol: {
        type: String,
        required: true

    }
});
module.exports = mongoose.model('rol', rolSchema);