const router = require('express').Router()

const authRoutes = require('./auth')
const usersRoutes = require('./users')
const styleRoutes = require('./style')

module.exports = (db) => {
    router.use('/auth', authRoutes(db))
    router.use('/users', usersRoutes(db))
    router.use('/style', styleRoutes(db))

    return router
}