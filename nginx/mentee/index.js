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
const serverSsl = https.createServer(certOption, app);

/**
 * Define port
 */
const httpPort = 80;
const httpsPort = 443;

app.all("*", loggerRequest);

app.get("/", (req, res) => {
	var ip = req.headers["x-forward-for"] || req.socket.remoteAddress;
	console.log(`[GET] get all mentee from ${ip}`);
	res.status(200).json({
		data: {
			id: 1,
			type: "mentee",
			attributes: {
				name: "Hung Nguyen"
			}
		}
	});
});

app.get("/1", (req, res) => {
	var ip = req.headers["x-forward-for"] || req.socket.remoteAddress;
	console.log(`[GET] mentee id 1 from ${ip}`);
	res.status(200).json({
		data: {
			attributes: {
				name: "Hung Nguyen",
				class: "C113"
			}
		}
	});
});

server.listen(httpPort, () => {
	console.log(`Mentee service is running on port ${httpPort}`);
});

serverSsl.listen(httpsPort, () => {
	console.log(`Mentee service is running on ssl port ${httpsPort}`);
});
