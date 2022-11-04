const express = require("express");
const http = require("http");
const https = require("https");
const loggerRequest = require("@hungntsol/logger-request-express");
const os = require("os");

const hostname = os.hostname();
const app = express();
const httpServer = http.createServer(app);

/**
 * Define ports
 */
const httpListeningPort = 80;

app.all("*", loggerRequest);

/**
 * GET
 */

app.get("/", (req, res) => {
  res.status(200).json({
    data: { id: 1, status: "ok" }
  });
});

app.get("/:name", (req, res) => {
  res.status(200).json({
    data: { id: 1, name: req.params.name, status: "ok" }
  });
});

/**
 * POST
 */

app.post("/:name", (req, res) => {
  res.status(200).json({
    status: `${req.params.name} ok`
  });
});

/**
 * PUT
 */

app.put("/:name", (req, res) => {
  res.status(200).json({
    status: `${req.params.name} ok`
  });
});

httpServer.listen(httpListeningPort, () => {
  console.log(`Start on ${hostname}`);
  console.log(`Sample service is running on port ${httpListeningPort}`);
});
