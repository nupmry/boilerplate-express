var express = require('express');
var app = express();
// require('dotenv').config()
// const mySecret = process.env['MESSAGE_STYLE'];

// app.route("/name").get((req, res) => {
//   res.json({"name": `${req.query[first]} ${req.query[last]}`})
// }).post((req, res) => {
//   res.json({"name": `${req.query[first]} ${req.query[last]}`})
// })

app.get('/name', (req, res) => {
  res.json({ name : req.query.first + " " + req.query.last})
})

// app.get("/:word/echo", (req, res) => {
//   res.json({"echo":req.params.word})
// })

// console.log("Hello World")

// app.get('/now', (req, res, next) => {
//   req.time = new Date().toString();
//   next();
// }, (req, res) => {res.json({time : req.time})})

// app.use('/public', express.static(__dirname + "/public"))

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + "/views/index.html")
// })

// app.get('/', (req, res) => {
//   res.send("Hello Express")
// })

// app.use((req, res, next) => {
//   console.log(`${req.method} ${req.path} - ${req.ip}`);
//   next();
// })

// app.get('/json', (req, res) => {
//   res.json(process.env.MESSAGE_STYLE==="uppercase" ? {"message": "HELLO JSON"}: {"message": "Hello json"})
// })

























 module.exports = app;
