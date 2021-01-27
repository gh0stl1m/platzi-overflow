const healthChecks = require('./healthyCheck');
const users = require('./users');
const ui = require('./ui');

module.exports = [...healthChecks, ...users, ...ui];
