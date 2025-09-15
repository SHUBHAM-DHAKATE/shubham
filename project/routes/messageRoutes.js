const express = require("express");
const router = express.Router();
const Message = require("../models/Message");

// Create Message
router.post("/", async (req, res) => {
  try {
    const message = await Message.create(req.body);
    res.json(message);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get Messages by Chat
router.get("/:chatId", async (req, res) => {
  const messages = await Message.find({ chat_id: req.params.chatId }).populate("sender_id");
  res.json(messages);
});

module.exports = router;
