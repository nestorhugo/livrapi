//import http from "http";
import app from "./src/app.js";

const PORT = 8080;

const rotas = {
  "/": "Buks!",
  "/sobre": "Sobre a Buks",
  "/contato": "Contato da Buks",
};

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
