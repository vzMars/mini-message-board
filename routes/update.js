const express = require('express');
const router = express.Router();
const Message = require('../models/message');

router.get('/:id', async (req, res) => {
  try {
    const message = await Message.findById(req.params.id);
    res.render('updateForm', {
      title: 'Mini Message Board',
      message: message,
    });
  } catch (error) {
    res.redirect('/');
  }
});

router.put('/:id', async (req, res) => {
  let message;

  try {
    message = await Message.findById(req.params.id);
    message.text = req.body.messageText;
    message.user = req.body.messageUser;
    await message.save();
    res.redirect('/');
  } catch (error) {
    if (!message) {
      res.redirect('/');
    } else {
      res.render('updateForm', {
        title: 'Mini Message Board',
        message: message,
        errorMessage: 'Error creating Message',
      });
    }
  }
});

module.exports = router;
