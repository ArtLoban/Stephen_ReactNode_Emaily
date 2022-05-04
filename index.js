const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

/* Middlewares */
app.use(bodyParser.json());   // Parse POST body
/* Set cookies auth */
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 *1000,  // 30 days
    keys: [keys.cookieKey],
  })
);
app.use(passport.initialize()); // It's set so that Automatically adds current user object to `req`
app.use(passport.session());

if (false) {  // TODO: Info: The same as below. Just as example!
  const authRoutes = require('./routes/authRoutes');
  authRoutes(app);
} else {
  require('./routes/authRoutes')(app);
  require('./routes/billingRoutes')(app);
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
