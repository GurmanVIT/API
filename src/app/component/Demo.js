var http = require('http');
var data = { name: "gurman", age: "20", email: "gurmandeep.vit@gmail.com" }
http.createServer(function (req, resp) {
    resp.writeHead(200, { 'Content-Type': 'application\json' })
    resp.write(JSON.stringify(data));
    resp.end();
}).listen(3900)