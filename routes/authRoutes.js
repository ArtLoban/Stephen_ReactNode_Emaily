const passport = require('passport');

module.exports = (app) => {
  /* Google OAuth first trip round */
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: [ 'profile', 'email' ]
    })
  );

  /* Google OAuth second trip round */
  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/surveys')
    }
  );

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  })
};
