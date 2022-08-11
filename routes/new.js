const express = require('express');
const router = express.Router();
const Message = require('../models/message');

router.get('/', (req, res) => {
  res.render('form', { title: 'Mini Message Board' });
});

router.post('/', async (req, res) => {
  const { messageUser, messageText } = req.body;
  const message = new Message({
    text: messageText,
    user: messageUser,
  });

  try {
    const newMessage = await message.save();
    res.redirect('/');
  } catch (error) {
    console.log(error);
    res.render('form', {
      title: 'Mini Message Board',
      errorMessage: 'Error creating Message',
    });
  }
});

module.exports = router;
