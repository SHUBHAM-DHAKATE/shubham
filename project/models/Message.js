const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  chat_id: { type: mongoose.Schema.Types.ObjectId, ref: "Chat" },
  sender_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  content_text: String,
  media_url: String,
  reactions: [String],
}, { timestamps: { createdAt: "created_at" } });

module.exports = mongoose.model("Message", messageSchema);
