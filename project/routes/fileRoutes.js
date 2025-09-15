const express = require("express");
const router = express.Router();

// Placeholder: implement File CRUD here

router.get("/", (req, res) => {
  res.json({ msg: "File routes" });
});

module.exports = router;
