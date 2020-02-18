const express = require("express");
const router = express.Router();

const Cars = require("./model");

router.get("/", (req, res) => {
	Cars.getAll()
		.then(result => {
			if (result) {
				res.json(result);
			} else {
				res.json({});
			}
		})
		.catch(err => {
			res.status(500).json({ message: "error" });
		});
});

router.post("/", (req, res) => {
	Cars.insert(req.body)
		.then(result => {
			if (result) {
				res.json(result);
			} else {
				res.json({});
			}
		})
		.catch(err => {
			res.status(500).json({ message: "error" });
		});
});
router.put("/:id", (req, res) => {
	Cars.update({ id: req.params.id, ...req.body })
		.then(result => {
			if (result) {
				res.json(result);
			} else {
				res.json({});
			}
		})
		.catch(err => {
			res.status(500).json({ message: "err.message" });
		});
});
router.delete("/:id", (req, res) => {
	Cars.deleteEntry(req.params)
		.then(result => {
			if (result) {
				res.json(result);
			} else {
				res.json({});
			}
		})
		.catch(err => {
			res.status(500).json({ message: "err.message" });
		});
});

module.exports = router;