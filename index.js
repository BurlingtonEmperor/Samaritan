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

app.post('/get_text', async function (req, res) {
  const url = req.body.url;

  const browser = await puppeteer.launch({
    executablePath : "/home/runner/.cache/puppeteer/chrome/linux-132.0.6834.110/chrome-linux64/chrome"
  });
  const page = await browser.newPage();

  await page.goto(url);
  const bodyText = await page.$eval('*', el => el.innerText);

  res.send(bodyText);
});

http.listen(port, function() {
  console.log('listening on *:' + port);
});