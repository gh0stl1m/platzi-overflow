module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: (req, h) => {
      return h.view('index', {
        title: 'Home'
      });
    }
  },
  {
    method: 'GET',
    path: '/register',
    handler: (req, h) => {
      return h.view('register', {
        title: 'Home'
      });
    }
  },
  {
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: '.',
        index: ['index.html'],
      }
    }
  }
]