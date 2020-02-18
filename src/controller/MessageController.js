const Message = require("../models/Message");

class MessageContrller {
  async index(req, res) {
    const messages = await Message.find().sort("-createdAt");

    return res.json(messages);
  }

  async store(req, res) {
    const message = await Message.create(req.body);

    return res.json(message);
  }

  async update(req, res) {
    const message = await Message.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });

    return res.json(message);
  }
}

module.exports = new MessageContrller();
