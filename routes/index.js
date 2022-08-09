const express = require('express');
const router = express.Router();
const Message = require('../models/message');

router.get('/', async (req, res) => {
  let messages;
  try {
    messages = await Message.find().sort({ added: -1 });
  } catch (error) {
    messages = [];
  }
  res.render('index', { title: 'Mini Message Board', messages: messages });
});

module.exports = router;
