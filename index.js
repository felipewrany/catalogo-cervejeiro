const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

require('dotenv').config()

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

const Cerveja = require("./models/cervejas");

app.get("/", async (req, res) => {
    const cervejas = await Cerveja.findAll();
  
    res.render("index", {
      cervejas,
    });
  });
  

app.get("/cadastro", (req, res) => {
    res.render("cadastro");
});

app.get("/editar/:id", async (req, res) => {
  const cerveja = await Cerveja.findByPk(req.params.id);
  res.render("editar", {
    cerveja
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
    const { nome, tipo, ibu, teoralcoolico, fabricante } = req.body;
    
    const cerveja = await Cerveja.create({
      nome,
      tipo,
      ibu,
      teoralcoolico,
      fabricante
    });
  
    res.render("index", {
      cervejas,
    });
});

app.post("/editar/:id", async (req, res) => {
  const cerveja = await Cerveja.findByPk(req.params.id);

  const { nome, tipo, ibu, teoralcoolico, fabricante } = req.body;

  cerveja.nome = nome;
  cerveja.tipo = tipo;
  cerveja.ibu = ibu;
  cerveja.teoralcoolico = teoralcoolico;
  cerveja.fabricante = fabricante;

  const cervejaEditada = await cerveja.save();

  res.render("editar", {
    cerveja: cervejaEditada

  });
});

app.post("/deletar/:id", async (req, res) => {  
  const cerveja = await Cerveja.findByPk(req.params.id);

  await cerveja.destroy();

  res.redirect("/");
  
});

app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);