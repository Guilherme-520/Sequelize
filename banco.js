const Sequelize = require("sequelize")
const sequelize = new Sequelize("test", "root", "", {
    host: "localhost",
    dialect: "mysql"
})

sequelize.authenticate().then(function(){
    console.log("Conexao realizada com sucesso")
}).catch(function(error){
    console.log("Falha ao conectar" + error)
})

const Agendamentos = sequelize.define("agendamento", {
    nome: {
        type: Sequelize.STRING
    }, 
    endereco: {
        type: Sequelize.STRING
    },
    bairro:{
        type: Sequelize.STRING
    },
    cep:{
        type: Sequelize.INTEGER
    },
    cidade:{
        type: Sequelize.STRING
    },
    estado:{
        type: Sequelize.STRING
    },
    observação:{
        type: Sequelize.TEXT
    }
})

const Empressa = sequelize.define("empressa", {
    nome: {
        type: Sequelize.STRING
    },
    cnpj: {
        type: Sequelize.INTEGER
    }
    
})

//Empressa.sync({force: true})
//Agendamentos.sync({force: true})

Agendamentos.create({
    nome: "Guilherme",
    endereco: "Rua capim",
    bairro: "Jd São carlos",
    cep: 08260040,
    cidade: "São Paulo",
    estado: "SP",
    observação: "isso tudo é teste, se subiu para o banco é amém"
})

Empressa.create({
    nome: "Guilherme.inc",
    cnpj: 51061214850
})