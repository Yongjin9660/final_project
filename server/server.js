const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const mongooseAutoInc = require('mongoose-auto-increment');

mongoose.connect('mongodb://localhost:27017/Lab10-201620956', {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
mongooseAutoInc.initialize(mongoose.connection);

const indexRouter = require('./routes/index');

const app = express();

app.use(cors());
app.use('/', indexRouter);

app.listen(3001, () => console.log('Node.js Server is running on port 3001...'));