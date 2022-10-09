const express = require("express");
const loggerRequest = require("logger-request-express");
const http = require("http");
const https = require("https");
const fs = require("fs");

const app = express();

/**
 * Auth middleware
 */
const authJwtMiddleware = (req, res, next) => {
	try {
		const token = req.headers["authorization"];
		if (!token) return res.status(401).json({ message: "No token provided" });

		const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);

		next();
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
};

/**
 * import cert
 */
const certOptions = {
	key: fs.readFileSync("./cert/key.pem", "utf-8"),
	cert: fs.readFileSync("./cert/cert.pem", "utf-8")
};

/**
 * create server
 */
const server = http.createServer(app);
const sslServer = https.createServer(app);

/**
 * define port
 */
const httpPort = 80;
const httpsPort = 443;

app.all("*", loggerRequest);

app.get("/check-health", (req, res) => {
	res.status(200).json({
		status: "ok"
	});
});

server.listen(httpPort, () => {
	console.log(`Identity service is running on port ${httpPort}`);
});

sslServer.listen(httpsPort, () => {
	console.log(`Identity service is running on ssl port ${httpsPort}`);
});
