const express = require("express");
const router = express.Router();
const Chat = require("../models/Chat");

// Create Chat
router.post("/", async (req, res) => {
  try {
    const chat = await Chat.create(req.body);
    res.json(chat);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all chats
router.get("/", async (req, res) => {
  const chats = await Chat.find().populate("participants").populate("admin");
  res.json(chats);
});

module.exports = router;
