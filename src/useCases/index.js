const { UserModel } = require('../domains/');
const { register } = require('./users');

module.exports = {
  users: {
    register: register(UserModel),
  }
};
