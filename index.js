const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/casdastro", (req, res) => {
    res.render("cadastro");
});

app.get("/editar", (req, res) => {
    res.render("editar");
});

app.get("/detalhes", (req, res) => {
    res.render("detalhes");
});

app.post("/cadastro", (req, res) => {
});
  