const express = require('express')

const serveStatic = require('serve-static')

const path = require('path')

/*create the express app*/

app.use("/", serveStatic (path.join (__dirname, '/public')))

