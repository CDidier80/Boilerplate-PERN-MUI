const Router = require('express').Router()

/* Sub-Routers Routers */
// const SubRouter  = require('./SubRouters/SubRouter')
const UserRouter = require('./SubRouters/UserRouter')

Router.use('/users', UserRouter)

module.exports = Router