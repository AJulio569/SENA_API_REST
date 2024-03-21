

const express = require('express');
const mongosee = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();
const personaRouter = require('./routes/persona');
const animalRouter = require('./routes/animal');
const medicamentoRouter = require('./routes/medicamento');
const rolRouter = require('./routes/rol');
const anamnesisRouter = require('./routes/anamnesis');
const tratamientoRouter = require('./routes/tratamiento');
//const persona = require('./models/persona');

const app = express();
const port = process.env.PORT || 3001;

// Llama al body-parser.
app.use(express.json());
app.use("/api", personaRouter);
app.use("/api", animalRouter);
app.use("/api", medicamentoRouter);
app.use("/api", rolRouter);
app.use("/api", anamnesisRouter);
app.use("/api", tratamientoRouter);
//Importar las rutas

//Se crean las rutas
app.get('/', (req, res) => {
    res.send('prueba 1 respuesta del servidor');
});

//mongosee.connect('mongodb+srv://andresjulio89:aMhY4SECQl5tlbDm@cluster0.wbwxnfi.mongodb.net/miDB?retryWrites=true&w=majority&appName=Cluster0')
mongosee.connect(process.env.MONGODB_URI)
    .then(() => console.log("Conectado a mongoDB Atlas"))
    .catch((error) => console.log(error));

app.listen(port, () => console.log("Servidor se esta escuchando por el puerto", port));
