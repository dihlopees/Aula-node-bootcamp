const {Sequelize, DataType, DataTypes} = require("sequelize");
let initChecklist = require("./checklist");
let initUsuario = require("./usuario");
let initNota = require("./nota");

//informações de credencial e senha para conectar com o bando de dados
const options = {
    username:"postgres",
    password:"ingrid1",
    host:"localhost", // se tivesse rodando um banco seria uma url
    dialect:"postgres",
    database:"notes",

};

const sequelize = new Sequelize(options);
sequelize.authenticate().then(() =>{
    console.log("conectado ao banco de dados")
}).catch(erro => {
    console.log(erro);
});

const Checklist = initChecklist(sequelize, DataTypes);
const Nota = initNota(sequelize, DataTypes);
const Usuario = initUsuario(sequelize, DataTypes);

Nota.hasMany(Checklist, {as:"checklists", foreingKey:"notaId"});
//nota tem muitos checklists

Nota.belongsTo(Usuario, {as:"usuario", foreingKey:"usuarioId"});



bd = {Usuario, Nota, Checklist}  //passando os parametros para o meu bd

bd.Sequelize = Sequelize;
bd.sequelize = sequelize;

module.exports = bd;

module.exports = {sequelize, Sequelize, Checklist, Nota, Usuario};