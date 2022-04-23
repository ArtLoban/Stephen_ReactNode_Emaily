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
  app.get('/auth/google/callback', passport.authenticate('google'));
};
