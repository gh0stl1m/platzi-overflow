const Mongoose = require('mongoose');
require('dotenv').config();

Mongoose.Promise = global.Promise;

const db = Mongoose.createConnection(process.env.MONGODB_URI, { poolSize: 10, useNewUrlParser: true });

db.on('error', (err) => {
  console.error('Connection error: ', err.message);
  process.exit(1);
});

db.on('open', () => console.log('Connection openned'));

db.on('connected', () => console.log('Connection established'));

db.on('disconnected', () => console.log('Connection is closed'));

process.on('SIGINT', () => {
  db.close(() => {
    console.log('DB connection is closed');
    process.exit(1);
  });
});

module.exports = db;
