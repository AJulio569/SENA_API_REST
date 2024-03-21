const express = require('express');
const router = express.Router();
const rolSchema = require("../models/rol");


// Crear una rol.
router.post("/rol", (req, res) => {
    const rol = rolSchema(req, body);
    rol.save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Craer cusulta todos.
router.get("/rol", (req, res) => {
    const rol = rolSchema(req, body);
    rolSchema
    fin()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));


});
//Crea consulta por id.
router.get("/rol/:id", (req, res) => {
    const { id } = req.params;
    rolSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));

});
//Actualizar rol.
router.put("/rol/:id", (req, res) => {
    const { id } = req.params;
    const { idRol, nombreRol, descripcionRol } = req.body
    rolSchema
        .updateOne({ _id: id }, { $set: { idRol, nombreRol, descripcionRol} })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));


});

//Eliminar un rol
router.delete("/rol/:id", (req, res) => {
    const { id } = req.params;
    rolSchema
        .deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));


});

module.exports = router;
