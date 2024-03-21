const express = require('express');
const router = express.Router();
const personaSchema = require("../models/persona");


// Crear una persona.
router.post("/persona", (req, res) => {
    const persona = personaSchema(req, body);
    persona.save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Craer cusulta todos.
router.get("/persona", (req, res) => {
    const persona = personaSchema(req, body);
    personaSchema
    fin()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));


});
//Crea consulta por id.
router.get("/persona/:id", (req, res) => {
    const { id } = req.params;
    personaSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));

});
//Actualizar persona.
router.put("/persona/:id", (req, res) => {
    const { id } = req.params;
    const { ID, nombre, apellidos, telefono, correo, password } = req.body
    personaSchema
        .updateOne({ _id: id }, { $set: { ID, nombre, apellidos, telefono, correo, password } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));


});

//Eliminar un cliente
router.delete("/persona/:id", (req, res) => {
    const { id } = req.params;
    personaSchema
        .deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));


});

module.exports = router;

