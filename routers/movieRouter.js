const express = require("express");
const router = express.Router();
const { index, show } = require("../controllers/movieController");

router.get("/movies", index);
router.get("/movies/:id", show);

module.exports = router;
