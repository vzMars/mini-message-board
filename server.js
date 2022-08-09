const express = require('express');
const app = express();
const PORT = 3000;

const indexRouter = require('./routes/index');
const newRouter = require('./routes/new');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', indexRouter);
app.use('/new', newRouter);

app.listen(process.env.PORT || PORT, () => {
  console.log(`Listening on ${PORT}`);
});
