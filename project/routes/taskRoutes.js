const express = require("express");
const router = express.Router();

// Placeholder: implement Task CRUD here

router.get("/", (req, res) => {
  res.json({ msg: "Task routes" });
});

module.exports = router;
