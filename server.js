const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 3000;
require('dotenv').config();

const indexRouter = require('./routes/index');
const newRouter = require('./routes/new');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Mongoose'));

app.use('/', indexRouter);
app.use('/new', newRouter);

app.listen(process.env.PORT || PORT, () => {
  console.log(`Listening on ${PORT}`);
});
