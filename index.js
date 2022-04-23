const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

if (false) {  // The same as below. Just as example!
  const authRoutes = require('./routes/authRoutes');
  authRoutes(app);
} else {
  require('./routes/authRoutes')(app);
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
