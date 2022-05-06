const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

/* Настройки подключения к БД */
mongoose.connect(keys.mongoURI);

/* Инициализация Express */
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


/* Все основные Роуты, описаные для Экспресс */
if (false) {  // TODO: Info: The same as below. Just as example!
  const authRoutes = require('./routes/authRoutes');
  authRoutes(app);
} else {
  require('./routes/authRoutes')(app);
  require('./routes/billingRoutes')(app);
}

/* Settings only ofr th production to setup routing correctly */
if (process.env.NODE_ENV === 'production') {
  // Тут важен порядок операций. Сначала асэты по конкретному url запроса, файл асэта.
  // Потом главная точка входа index.html

  // Express will serve up production assets like our main.js file, or main.css file
  app.use(express.static('clint/build'));

  // Express will serve up the index.html file if it doesn't recognize the route.
  // Если урл запроса нет среди описаных в Экспресс, то вероятно это роут из CPA React.
  // Вернуть индексный файл. Это Catch-All option.
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

/* Слушать порт */
const PORT = process.env.PORT || 5000;
app.listen(PORT);
