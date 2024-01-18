import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Buks!");
});

export default app; // Exporta o app para ser usado em outros arquivos
