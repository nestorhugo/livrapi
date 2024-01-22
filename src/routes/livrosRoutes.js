import express from "express";
import LivroController from "../controllers/LivroController.js";

const routes = express.Router();

routes.get("/livros", LivroController.listarLivros);
