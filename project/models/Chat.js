const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
  chat_type: { type: String, enum: ["1:1", "group"], required: true },
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  admin: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
}, { timestamps: { createdAt: "created_at" } });

module.exports = mongoose.model("Chat", chatSchema);
