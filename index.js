const express = require('express')
const app = express()
const port = process.env.PORT = 1010
const path = require('path')
const { request, response } = require('express')
const helpers = require('./src/helpers/functions.helpers')

// LIVERELOAD
const livereload = require('livereload')
const livereloadServer = livereload.createServer()
const connectLivereload = require('connect-livereload')
livereloadServer.server.once("connection", () => {
    setTimeout(function() {
        livereloadServer.refresh('/')
    }, 100);
})
livereloadServer.watch(path.join(__dirname, 'public'))
app.use(connectLivereload())

// MIDLEWARES
app.use(express.static('public'))
app.use(express.json())
app.use((req=request, res=response, next) => {
    res.locals.readDatabase = helpers.readDatabase
    res.locals.writeDatabase = helpers.writeDatabase
    next()
})

// ROUTES
app.use('/usuarios', require('./src/routes/usuarios.routes'))

app.listen(port, () => {
    console.log('Listening at port', port);
})