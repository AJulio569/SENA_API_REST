const express = require('express');
const router = express.Router();
const medicamentoSchema = require("../models/medicamento");


// Crear una medicamento.
router.post("/medicamento", (req, res) => {
    const medicamento = medicamentoSchema(req, body);
    medicamento.save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Craer cusulta todos.
router.get("/medicamento", (req, res) => {
    const medicamento = medicamentoSchema(req, body);
    medicamentoSchema
    fin()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));


});

//Crea consulta por id.
router.get("/medicamento/:id", (req, res) => {
    const { id } = req.params;
    medicamentoSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));

});

//Actualizar medicamento.
router.put("/medicamento/:id", (req, res) => {
    const { id } = req.params;
    const { idMedicamento, nombreM, descripcionM, fechaVencimiento, fechaRegistro, laboratorio, cantidad } = req.body
    medicamentoSchema
        .updateOne({ _id: id }, { $set: { idMedicamento, nombreM, descripcionM, fechaVencimiento, fechaRegistro, laboratorio, cantidad } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));


});

//Eliminar un medicamento
router.delete("/medicamento/:id", (req, res) => {
    const { id } = req.params;
    medicamentoSchema
        .deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));


});

module.exports = router;