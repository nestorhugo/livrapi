import express from "express";
import conectaDatabase from "../config/dbConnect.js";
import livro from "./models/Livro.js";

const conexao = await conectaDatabase();

conexao.on("error", (erro) =>
  console.eror("Erro ao conectar com o banco de dados.", erro)
);

conexao.once("open", () =>
  console.log("Conexão com o banco de dados estabelecida.")
);

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Buks!");
});

// app.get("/livros", async (req, res) => {
//   const listaLivros = await livro.find({});
//   res.status(200).json(listaLivros);
// });

app.get("/livros/:id", (req, res) => {
  const index = buscaLivro(req.params.id);
  if (index >= 0) {
    res.status(200).json(livros[index]);
  } else {
    res.status(404).send("Livro não encontrado.");
  }
});

app.post("/livros", (req, res) => {
  livros.push(req.body);
  res.status(201).json(livros[livros.length - 1]);
});

app.put("/livros/:id", (req, res) => {
  const index = buscaLivro(req.params.id);
  livros[index].nome = req.body.nome;
  res.status(200).json(livros[index]);
});

app.delete("/livros/:id", (req, res) => {
  const index = buscaLivro(req.params.id);
  if (index >= 0) {
    livros.splice(index, 1);
    res.status(204).end();
  } else {
    res.status(404).send("Livro não encontrado.");
  }
});

export default app;
