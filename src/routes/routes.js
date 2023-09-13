const UserRoutes = require('./user/UserRoutes')

const routes = (server) => {
  server.use('/user', new UserRoutes().route)
}

module.exports = routes
