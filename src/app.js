import express from "express";

const app = express();
app.use(express.json());

const livros = [
  {
    id: 1,
    nome: "O Senhor dos Anéis",
    autor: "J. R. R. Tolkien",
  },
  {
    id: 2,
    nome: "Harry Potter e a Pedra Filosofal",
    autor: "J. K. Rowling",
  },
  {
    id: 3,
    nome: "As Crônicas de Nárnia",
    autor: "C. S. Lewis",
  },
];

app.get("/", (req, res) => {
  res.status(200).send("Buks!");
});

app.get("/livros", (req, res) => {
  res.status(200).json(livros);
});

app.post("/livros", (req, res) => {
  livros.push(req.body);
  res.status(201).json(livros[livros.length - 1]);
});

export default app; // Exporta o app para ser usado em outros arquivos
