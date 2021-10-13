const express = require("express");
const path = require("path");
require('dotenv').config()


const app = express();
const port = process.env.PORT || 3000;
const Cerveja = require("./models/cervejas");

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", async (req, res) => {
    const cervejas = await Cerveja.findAll();
  
    res.render("index", {
      cervejas,
    });
  });
  

app.get("/cadastro", (req, res) => {
    res.render("cadastro");
});

app.get("/editar", (req, res) => {
    res.render("editar");
});

app.get("/cervejas/:id", async (req, res) => {
  const cerveja = await Cerveja.findByPk(req.params.id);

  res.render("detalhes", {
    cerveja,
  });
});

app.get("/sobre", (req, res) => {
    res.render("sobre");
});

app.post("/cadastro", async (req, res) => {
    const { nome, tipo, ibu,teoralcoolico,fabricante } = req.body;
    
    const cerveja = await Cerveja.create({
      nome,
      tipo,
      ibu,
      teoralcoolico,
      fabricante
    });
  
    res.render("cadastro", {
      cervejas,
    });
  });


app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);