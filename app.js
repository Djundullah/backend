const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.use((req, res, next) => {
  console.log("requête reçu");
  next();
});

app.use((req, res, next) => {
  res.status(201);
  next();
});

app.use((req, res, next) => {
  res.json({
    message: "votre requête à bien été reçu",
  });
});

app.use((req, res, next) => {
  console.log("Réponse envoyée avec succès !");
});

mongoose
  .connect(
    "mongodb+srv://jimbob:<Aimenou59560(>@cluster0-pme76.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

module.exports = app;
