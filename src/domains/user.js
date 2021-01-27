const { Schema } = require('mongoose');

const dbConn = require('../repositories/mongoDB');

const UserModel = new Schema({

}, { timestamps: true });

module.exports = dbConn.model('user', UserModel);
