const express = require("express");

const http = require("http");
const https = require("https");
const fs = require("fs");

const loggerRequest = require("logger-request-express");

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

app.all("*", loggerRequest);

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
});

app.post("/:name", (req, res) => {
	res.status(201).json({
		data: {
			name: req.params.name,
			status: "ok"
		}
	});
});

app.put("/:name/:age", (req, res) => {
	res.status(200).json({
		data: {
			name: req.params.name,
			age: req.params.age,
			status: "ok"
		}
	});
});

server.listen(httpPort, () => {
	console.log(`Mentor service is running on port ${httpPort}`);
});

sslServer.listen(httpsPort, () => {
	console.log(`Mentor service is running on ssl port ${httpsPort}`);
});
