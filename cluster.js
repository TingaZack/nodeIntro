// CLUSTER MODULES
const cluster = require("cluster");
const http = require("http");
const OS = require("os");

console.log(OS.cpus().length)

if (cluster.isMaster) {
  console.log("Master process " + process.pid + " is running");
  cluster.fork();
  cluster.fork();
} else {
    console.log("Worker " + process.pid + "is running");
    const server = http.createServer((req, res) => {
        if (req.url === "/") {
          res.writeHead(200, { "Content-Type": "text/plain" });
          res.end("Home Page");
        } else if (req.url === "/slow-page") {
          for (let i = 0; i < 1000000000; i++) {
            //   console.log("Slow Page")
          }
          res.writeHead(200, { "Content-Type": "text/plain" });
          res.end("Slow Page");
        }
      });
      
      server.listen(8000, () => console.log("listening on port 8000 "));
}
