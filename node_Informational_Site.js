const express = require("express");
const fs = require('node:fs');

const app = express();

app.get(['/','/index'], function (req, res) {
    res.send(fs.readFileSync('index.html', { encoding: 'utf-8' }))
})

app.get('/contact_me', function (req, res) {
    res.send(fs.readFileSync('contact_me.html', { encoding: 'utf-8' }))
})

app.get('/about', function (req, res) {
    res.send(fs.readFileSync('about.html', { encoding: 'utf-8' }))
})

app.get(/^\/\w+$/, function (req, res) {
    res.send(fs.readFileSync('404.html', { encoding: 'utf-8' }))
})

app.listen(8080)

console.log('Server Restarted')