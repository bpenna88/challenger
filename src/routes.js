const Router = require('express')
const userPfRoute = require('./controller/userPfRoute')

const routes = Router()

routes.use('/api', userPfRoute)
routes.use((request, response) => {
  response.send(404)
})

module.exports = routes
