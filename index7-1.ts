// HTTP AND HTML RESPONSE
const HTTP = require("http");
const FS = require("fs");

const serverr = HTTP.createServer((req, res) => {
    const name = 'Zak';
  res.writeHead(200, { "Content-Type": "text/html" });

  let html = FS.readFileSync('./index.html', 'utf-8');
  html = html.replace('{{name}}', name);
  
  res.end(html);

});

serverr.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
