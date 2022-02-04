const express = require("express");
const app = express();

const usuario = require("./rotas/usuario");
const nota = require("./rotas/nota");

const {sequelize} = require("./bd");

app.use(express.json());

app.get('/', (req, res) => {
    res.send({mensagem: "bem vindo"});
});

app.use('/usuario', usuario);
//define a rota usada pelo / e chamo o usuario.js que criei anteriormente

app.use('/nota', nota);


app.listen(3001, () => {
    console.log("APLICAÇÃO INICIADA");
});

