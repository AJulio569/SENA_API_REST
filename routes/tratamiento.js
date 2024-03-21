const express = require('express');
const router = express.Router();
const tratamientoSchema = require("../models/tratamiento");


// Crear una tratamiento.
router.post("/tratamiento", (req, res) => {
    const tratamiento = tratamientoSchema(req, body);
    tratamiento.save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Craer cusulta todos.
router.get("/tratamiento", (req, res) => {
    const tratamiento = tratamientoSchema(req, body);
    tratamientoSchema
    fin()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));


});
//Crea consulta por id.
router.get("/tratamiento/:id", (req, res) => {
    const { id } = req.params;
    tratamientoSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));

});
//Actualizar tratamiento.
router.put("/tratamiento/:id", (req, res) => {
    const { id } = req.params;
    const { idTratamiento, dosis, medicamento,fechaAdmision,fechaTratamiento } = req.body
    tratamientoSchema
        .updateOne({ _id: id }, { $set: { idTratamiento, dosis, medicamento,fechaAdmision,fechaTratamiento } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));


});

//Eliminar un tratamiento
router.delete("/tratamiento/:id", (req, res) => {
    const { id } = req.params;
    tratamientoSchema
        .deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));


});

module.exports = router;