const express = require("express");
const router = express.Router();

// Placeholder: implement Meeting CRUD here

router.get("/", (req, res) => {
  res.json({ msg: "Meeting routes" });
});

module.exports = router;
