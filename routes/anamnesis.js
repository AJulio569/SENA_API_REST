const express = require('express');
const router = express.Router();
const anamnesisSchema = require("../models/anamnesis");


// Crear una anamnesis.
router.post("/anamnesis", (req, res) => {
    const anamnesis = anamnesisSchema(req, body);
    anamnesis.save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Craer cusulta todos.
router.get("/anamnesis", (req, res) => {
    const anamnesis = anamnesisSchema(req, body);
    anamnesisSchema
    fin()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));


});
//Crea consulta por id.
router.get("/anamnesis/:id", (req, res) => {
    const { id } = req.params;
    anamnesisSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));

});
//Actualizar anamnesis.
router.put("/anamnesis/:id", (req, res) => {
    const { id } = req.params;
    const { idAnamnesis, sintoma, fecha } = req.body
    anamnesisSchema
        .updateOne({ _id: id }, { $set: { idAnamnesis, sintoma, fecha} })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));


});

//Eliminar un anamnesis
router.delete("/anamnesis/:id", (req, res) => {
    const { id } = req.params;
    anamnesisSchema
        .deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));


});

module.exports = router;