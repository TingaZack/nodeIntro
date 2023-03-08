const _http = require("http");

const httpServer = _http.createServer((req, res) => {
  res.writeHead(200, "Content-Type", "text/plain");
  res.end("hello world!");
});

const PORT = process.env.PORT || 3000;
httpServer.listen(PORT, () => console.log('Server listening on port' + PORT))