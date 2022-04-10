const express = require('express');
const https = require('https');
const fs = require('fs');
const cors = require('cors');
const app = express();
const port = 4000;
const indexRouter = require('./routes/index.js');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
dotenv.config();

app.use(express.json({ strict: false }));
app.use(cookieParser());
app.use(cors());

app.use('/', indexRouter);
// /order/:user_id/buy,sell,borrow
// get, post
// /user/signout, signin, signup
// get, post

// /order, user (routes/index.js)
// /:user_id/buy,sell,borrow 한 곳에? post에 따라? getdp Efk?
// /signout, signin, signup

module.exports = app.listen(port, () => {
  console.log(`      🚀 Server is starting on ${port}`);
});
