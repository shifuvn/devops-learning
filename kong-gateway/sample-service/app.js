const express = require("express");
const http = require("http");
const https = require("https");

const app = express();
const httpServer = http.createServer(app);

/**
 * Define ports
 */
const httpListeningPort = 80;

const loggerClientIp = (req, route) => {
	const ip = req.headers["x-forward-for"] || req.socket.remoteAddress;
	console.log(`[${req.method}]  ${ip}  ${route}`);
};

app.get("/", (req, res) => {
	loggerClientIp(req, "/");
	res.status(200).json({
		data: { id: 1, status: "ok" }
	});
});

app.post("/:name", (req, res) => {
	loggerClientIp(req, `/${req.params.name}`);
	res.status(200).json({
		status: `${req.params.name} ok`
	});
});

httpServer.listen(httpListeningPort, () => {
	console.log(`Sample service is running on port ${httpListeningPort}`);
});
