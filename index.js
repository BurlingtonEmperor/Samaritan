const express = require('express');

const app = require('express')();
const http = require('http').Server(app);
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

const request = require('request');
const rp = require('request-promise');

process.on('uncaughtException', function (exception) {
  console.log(exception);
});

let categoryDictionary = [];

app.post('/get_search', async function (req, res) {
  const url = req.body.searchurl;
 
  rp(url)
  .then(function (html) {
    res.send(html);
  })
  .catch(function (err) {
    throw err;
  });
});

http.listen(port, function() {
  console.log('listening on *:' + port);
});