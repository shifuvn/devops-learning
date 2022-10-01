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
const serverSsl = https.createServer(certOption, app);

/**
 * Define port
 */
const httpPort = 80;
const httpsPort = 443;

app.get("/", (req, res) => {
	var ip = req.headers["x-forward-for"] || req.socket.remoteAddress;
	console.log(`[GET] get all mentors from ${ip}`);
	res.status(200).json({
		data: {
			id: 1,
			type: "mentor",
			attributes: {
				name: "Hung Provip"
			}
		}
	});
});

server.listen(httpPort, () => {
	console.log(`Mentor service is running on port ${httpPort}`);
});

serverSsl.listen(httpsPort, () => {
	console.log(`Mentor service is running on ssl port ${httpsPort}`);
});
