const passport = require('passport');

module.exports = app => {
  app.get('/success', (req, res) =>
    res.send('Welcome ' + req.query.username + '!!')
  );
  app.get('/error', (req, res) => res.send('error logging in'));

  app.post(
    '/',
    passport.authenticate('local', { failureRedirect: '/error' }),
    function(req, res) {
      res.redirect('/success?username=' + req.user.username);
    }
  );
};
