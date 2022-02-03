var express = require('express');
var app = express();
// require('dotenv').config()
// const mySecret = process.env['MESSAGE_STYLE'];

// console.log("Hello World")


// app.use('/public', express.static(__dirname + "/public"))

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + "/views/index.html")
// })

// app.get('/', (req, res) => {
//   res.send("Hello Express")
// })



app.get('/json', (req, res) => {
  res.json(process.env.MESSAGE_STYLE==="uppercase" ? {"message": "HELLO JSON"}: {"message": "Hello json"})
})

























 module.exports = app;
