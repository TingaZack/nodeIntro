// HTTP AND HTML ROUTING
const HttP = require("http");
const _fs = require("fs");

const _server = HttP.createServer((req, res) => {
//   res.end(req.url);
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Home Page");
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("About Page");
  } else if (req.url === "/api") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(({
        firstName: 'Bruce',
        lastName: 'Wayne',
    })));
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Page Not Found");
  }
});

_server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
