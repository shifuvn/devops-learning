const express = require("express");

const http = require("http");
const https = require("https");
const fs = require("fs");

const app = express();

/**
 * Import cert
 */
const certOption = {
	key: fs.readFileSync("./cert/key.pem", "utf-8"),
	cert: fs.readFileSync("./cert/cert.pem", "utf-8")
};

/**
 * Create server for app
 */
const server = http.createServer(app);
const sslServer = https.createServer(certOption, app);

/**
 * Define port
 */
const httpPort = 80;
const httpsPort = 443;

const loggerRequest = (req, res) => {
	const ip = req.headers["x-forward-for"] || req.socket.remoteAddress;
	const route = req.originalUrl;
	const method = req.method;

	const statusCode = res ? res.statusCode.toString() : "";

	console.log(
		`${ip} -- [${new Date().toGMTString()}] "${method} ${route} ${statusCode}"`
	);
};

app.get("/:name", (req, res) => {
	res.status(200).json({
		data: {
			id: 1,
			type: "mentor",
			attributes: {
				name: req.params.name
			}
		}
	});

	loggerRequest(req, res);
});

app.post("/:name", (req, res) => {
	res.status(200).json({
		data: {
			name: req.params.name,
			status: "ok"
		}
	});
	loggerRequest(req, res);
});

app.put("/:name/:age", (req, res) => {
	res.status(200).json({
		data: {
			name: req.params.name,
			age: req.params.age,
			status: "ok"
		}
	});
	loggerRequest(req, res);
});

server.listen(httpPort, () => {
	console.log(`Mentor service is running on port ${httpPort}`);
});

sslServer.listen(httpsPort, () => {
	console.log(`Mentor service is running on ssl port ${httpsPort}`);
});
