const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

require('dotenv').config()

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

//Para informar o usuário
let message = "";

const Cerveja = require("./models/cervejas");

app.get("/", async (req, res) => {
    const cervejas = await Cerveja.findAll({
      order:[
        ['id','ASC']
      ]
    });
    setTimeout(() => {
      message = "";
    }, 500);
  
    res.render("index", {
      cervejas, message
    });
  });
  

app.get("/cadastro", (req, res) => {
    res.render("cadastro", {
    message
  });
});

app.get("/editar/:id", async (req, res) => {
  const cerveja = await Cerveja.findByPk(req.params.id);
  res.render("editar", {
    cerveja, message
  });
});

app.get("/detalhes/:id", async (req, res) => {
  const cerveja = await Cerveja.findByPk(req.params.id);

  res.render("detalhes", {
    cerveja,
  });
});

app.get("/sobre", (req, res) => {
    res.render("sobre");
});

app.post("/cadastro", async (req, res) => {
    const { nome, tipo, ibu, teoralcoolico, fabricante, descricao } = req.body;
    
    const cerveja = await Cerveja.create({
      nome,
      tipo,
      ibu,
      teoralcoolico,
      fabricante,
      descricao
    });
    message="Cerveja cadastrada com sucesso!";
    res.redirect("/");
});

app.post("/editar/:id", async (req, res) => {
  const cerveja = await Cerveja.findByPk(req.params.id);

  const { nome, tipo, ibu, teoralcoolico, fabricante, descricao } = req.body;

  cerveja.nome = nome;
  cerveja.tipo = tipo;
  cerveja.ibu = ibu;
  cerveja.teoralcoolico = teoralcoolico;
  cerveja.fabricante = fabricante;
  cerveja.descricao = descricao;

  const cervejaEditada = await cerveja.save();
  message="Cerveja editada com sucesso!";

  res.redirect("/");  
});

app.post("/deletar/:id", async (req, res) => {  
  const cerveja = await Cerveja.findByPk(req.params.id);

  await cerveja.destroy();
  message="Cerveja apagada com sucesso!";

  res.redirect("/");
  
});

app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);