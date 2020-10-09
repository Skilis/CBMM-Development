const express = require('express')

const serveStatic = require('serve-static')

const path = require('path')

/*create the express app*/

app.use("/", serveStatic (path.join (__dirname, '/public')))

/*serve index by default*/

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/index.html')
})