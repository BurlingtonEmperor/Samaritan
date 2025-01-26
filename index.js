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
const puppeteer = require('puppeteer');

process.on('uncaughtException', function (exception) {
  console.log(exception);
});

const cheerio = require("cheerio");
// const unirest = require("unirest");

// const url = "https://frc-events.firstinspires.org/2024/team/2876";
const ua =
  "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36";

// function cheerioTest () {
//   fetch(url, {
//     headers: {
//       "User-Agent": ua,
//     },
//   })
//     .then(res => res.text())
//     .then(html => {
//       const $ = cheerio.load(html);
//       let body = $("body").text();

//       console.log(body);
//     });
// }

let categoryDictionary = [];

app.get('', function (req, res) {
  const index = __dirname + '/public/static/index.html';

  res.sendFile(index);
});

app.post('/get_search', async function (req, res) {
  console.log("gotresult");
  const url = req.body.url;
 
  rp(url)
  .then(function (html) {
    res.send(html);
  })
  .catch(function (err) {
    throw err;
  });
});

app.post('/get_source', async function (req, res) {
  url = req.body.url;

  fetch(url, {
    headers: {
      "User-Agent": ua,
    }
  })
  .then(res => res.text())
  .then(html => {
    const $ = cheerio.load(html);
    
    res.send($);
  });
});

app.post('/get_text', async function (req, res) {
  url = req.body.url;

  fetch(url, {
    headers: {
      "User-Agent": ua,
    }
  })
  .then(res => res.text())
  .then(html => {
    const $ = cheerio.load(html);
    const bodyText = $("body").text();
    
    res.send(bodyText);
  });
});

http.listen(port, function() {
  console.log('listening on *:' + port);
});