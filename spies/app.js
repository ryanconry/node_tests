var db = require('./db.js');

module.exports.handleSignup = (email,password) => {
  //check if email exists
  db.saveUser({email,password});      //es6 for object with key names same as variable names
  //send welcome email
};
