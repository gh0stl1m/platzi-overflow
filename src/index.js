const app = require('./deliver/http/server');

process.on('unhandledRejection', err => console.error('UnhandleRejection: ', { message: err.message, err }));
process.on('unhandleException', err => console.error('UnhandleException: ', { message: err.message, err }));

app();