const express = require('express');
const router = express.Router();
const animalSchema = require("../models/animal");


// Crear una animal.
router.post("/animal", (req, res) => {
    const animal = animalSchema(req, body);
    animal.save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Craer cusulta todos.
router.get("/animal", (req, res) => {
    const animal = animalSchema(req, body);
    animalSchema
    fin()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));


});

//Crea consulta por id.
router.get("/animal/:id", (req, res) => {
    const { id } = req.params;
    animalSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));

});

//Actualizar animal.
router.put("/animal/:id", (req, res) => {
    const { id } = req.params;
    const { idAnimal, edad, sexo, raza, peso, estadoReproductivo } = req.body
    animalSchema
        .updateOne({ _id: id }, { $set: { idAnimal, edad, sexo, raza, peso, estadoReproductivo } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));


});

//Eliminar un animal
router.delete("/animal/:id", (req, res) => {
    const { id } = req.params;
    animalSchema
        .deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));


});

module.exports = router;