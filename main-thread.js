// WORKER THREADS MODULES

const { Worker } = require("worker_threads");
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Home Page");
  } else if (req.url === "/slow-page") {
    const worker = new Worker("./worker_thread.js");
    worker.on("message", (j) => {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Slow Page" + j);
    });
  }
});

server.listen(8000, () => console.log("listening on port 8000 "));
