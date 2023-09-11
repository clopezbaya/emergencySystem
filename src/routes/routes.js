const LoginRoutes = require('./login/loginRoutes')

const routes = (server) => {
  server.use('/login', new LoginRoutes().route)
}

module.exports = routes
