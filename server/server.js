const express = require('express');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const mongooseAutoInc = require('mongoose-auto-increment');
const bodyParser = require('body-parser');

const Session = require('express-session');
const flash = require('connect-flash');
var MongoDBStore = require('connect-mongodb-session')(Session);

mongoose.connect('mongodb://localhost:27017/web_final', {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
mongooseAutoInc.initialize(mongoose.connection);

const contentRouter = require('./routes/content');
const loginRouter = require('./routes/login');
const reviewRouter = require('./routes/review');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/content', contentRouter);
app.use('/login', loginRouter);
app.use('/review', reviewRouter);
app.use(flash());

var store = new MongoDBStore({
  url: "mongodb://localhost:27017",
  collection: 'WebSessions'
});

store.on('error', function(error) {//에러처리
  console.log(error);
});

app.use(Session({
  secret:'mymymymymyna', 
  resave:false,
  saveUninitialized:true,
  cookie:{maxAge:1000*60*60},
  store: store
}));
app.use(passport.initialize());
app.use(passport.session());

app.listen(4000, () => console.log('Node.js Server is running on port 4000...'));