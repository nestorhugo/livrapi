import http from "http";

const PORT = 8080;

const rotas = {
  "/": "Buks!",
  "/sobre": "Sobre a Buks",
  "/contato": "Contato da Buks",
};

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(rotas[req.url]);
});

server.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
