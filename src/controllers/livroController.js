import livro from "../models/livroModel.js";

class LivroController {
  static async listarLivros(req, res) {
    const listaLivros = await livro.find({});
    res.status(200).json(listaLivros);
  }
}
