const { Schema } = require('mongoose');

const dbConn = require('../repositories/mongoDB');

const UserModel = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
}, { timestamps: true });

module.exports = dbConn.model('user', UserModel);
