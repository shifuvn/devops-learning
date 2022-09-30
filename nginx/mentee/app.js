const express = require("express");

const app = express();

app.get("/", (req, res) => {
	console.log("[GET] get all mentee");
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
	console.log("[GET] mentee id 1");
	res.status(200).json({
		data: {
			attributes: {
				name: "Hung Nguyen",
				class: "C113"
			}
		}
	});
});

app.listen(8080, () => {
	console.log(`Mentee service running on port 8080`);
});
