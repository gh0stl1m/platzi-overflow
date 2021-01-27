const { healthChecks } = require('../../../../adapters');

module.exports = [
  { method: 'GET', path: '/health', handler: healthChecks.serverStatus }
];
