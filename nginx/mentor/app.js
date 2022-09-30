const express = require("express");

const app = express();

app.get("/", (req, res) => {
	console.log("[GET] get all mentors");
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

const port = 8081;

app.listen(port, () => {
	console.log(`Mentor service running on port ${port}`);
});
