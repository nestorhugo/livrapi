import livro from "../models/Livro.js";

class LivroController {
  static async listarLivros(req, res) {
    const listaLivros = await livro.find({});
    res.status(200).json(listaLivros);
  }

  static async cadastrarLivro(req, res) {
    try {
      const novoLivro = await livro.create(req.body);
      res
        .status(201)
        .json({ message: "Livro cadastrado com sucesso.", livro: novoLivro });
    } catch (erro) {
      res
        .status(500)
        .json({ message: `Erro ao cadastrar o livro. ${erro.message}` });
    }
  }
}

export default LivroController;
