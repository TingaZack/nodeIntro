// HTTP AND HTML RESPONSE
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log("Server is running");
  const superHero = {
    name: "Bruce Wayne",
    lasName: "Superhero",
  };
  res.writeHead(200, { "Content-Type": "text/html" });
  fs.createReadStream(__dirname + "/index.html").pipe(res);
  // const html = fs.readFileSync('./index.html', 'utf-8');
  // res.end(html);
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
