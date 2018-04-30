const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
  username: String,
  password: String,
  role: String
});

mongoose.model('usr_users', User, 'usr_users');
