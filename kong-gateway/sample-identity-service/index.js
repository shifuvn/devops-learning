const express = require("express");
const http = require("http");
const https = require("https");
const loggerRequest = require("@hungntsol/logger-request-express");
const os = require("os");

const hostname = os.hostname();

const app = express();

//port
const httpPort = 80;
const httpsPort = 443;

const server = http.createServer(app);

app.all("*", loggerRequest);

app.get("/secret", (req, res) => {
  res.status(200).json({
    data: {
      secret: "abc123"
    }
  });
});

server.listen(httpPort, () => {
  console.log(`Start on hostname ${hostname}`);
  console.log(`Identity service is running on port ${httpPort}`);
});
