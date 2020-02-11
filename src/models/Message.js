const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const MessageSchema = new mongoose.Schema({
  sentBy: String,
  receivedBy: String,
  message: String,
  read: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

MessageSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("Message", MessageSchema);
