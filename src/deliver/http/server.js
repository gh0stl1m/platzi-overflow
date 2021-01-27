const Hapi = require('@hapi/hapi');
const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision');
const handleBars = require('handlebars');
const path = require('path');

// Routes
const routes = require('./routes');

const server = Hapi.server({
  host: 'localhost',
  port: process.env.PORT || 3000,
  routes: {
    files: { relativeTo: path.join(path.resolve(process.cwd()), 'public')}
  }
});

async function app() {
  try {
    await server.register(Inert);
    await server.register(Vision);

    server.views({
      engines: {
        hbs: handleBars,
      },
      relativeTo: path.dirname(require.main.filename),
      path: 'views',
      layout: true,
      layoutPath: 'views'
    })

    // Register routes
    server.route(routes);
  
    await server.start();
    console.log('Server running at: ', server.info.uri);
  } catch (err) {
    console.error("Error running server: ", err.message);
    process.exit(1);
  }
}

module.exports = app;
