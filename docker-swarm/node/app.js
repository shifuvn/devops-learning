var http = require("http");
var os = require("os");

const port = 8002;
const hostname = os.hostname();

http
	.createServer(function (req, res) {
		res.writeHead(200, { "Content-Type": "text/plain" });
		res.end("Nodejs app service, hostname = " + hostname);
	})
	.listen(port);

console.log("NodeApp running on port: " + port);
