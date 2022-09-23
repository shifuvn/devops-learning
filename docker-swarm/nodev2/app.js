const http = require("http");
const os = require("os");

const hostname = os.hostname();
const port = 8022;

http
	.createServer(function (req, res) {
		res.writeHead(200, { "Content-Type": "text/plain" });
		res.end("Nodejs app v2 is running, hostname = " + hostname);
	})
	.listen(port);

console.log(`App listing on port ${port}`);
