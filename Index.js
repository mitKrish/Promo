//Express
const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const passport = require('passport');
require('./models/usr_users');
require('./services/passport');

const bodyParser = require('body-parser');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.sendFile('Login.html', { root: __dirname }));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('App listening on port ' + port));

app.use(passport.initialize());
app.use(passport.session());

require('./routes/usrRoutes')(app);
