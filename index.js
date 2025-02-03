const express = require('express');

const app = require('express')();
const http = require('http').Server(app);
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

const request = require('request');
const rp = require('request-promise');
const puppeteer = require('puppeteer');

process.on('uncaughtException', function (exception) {
  console.log(exception);
});

const cheerio = require("cheerio");
const unirest = require("unirest");

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

// let categoryDictionary = [];

function randomizeUserAgents () {
  const userAgents =  ["Mozilla/5.0 (Windows NT 10.0; Win64; x64)  AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36"];
  let randNum = Math.floor(Math.random() * userAgents.length);
  return userAgents[randNum];
}

function cleanOrganicSearch (searchText) {
  let filteredSearch = searchText.replace(" ", "%20");
}

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
    res.send(html);
  });
});

app.post('/get_text', async function (req, res) {
  url = req.body.url;

  fetch(url, {
    headers: {
      "User-Agent" : ua,
    }
  })
  .then(res => res.text())
  .then(html => {
    const $ = cheerio.load(html);
    const bodyText = $("body").text();
    
    res.send(bodyText);
  });
});

app.post('/scrape_search', async function (req, res) {
  let desiredText = req.body.text;
  
  unirest.get("https://www.google.com/search?q=" + cleanOrganicSearch(desiredText) + "&gl=us&hl=en")
  .headers({
    "User-Agent" : randomizeUserAgents()
  })
  .then((response) => {
    let $ = cheerio.load(response.body);
    let titles = [];
    let links = [];
    let snippets = [];
    let displayedLinks = [];

    $(".g .yuRUbf h3").each((i, el) => {
      titles[i] = $(el).text();
    });
    $(".yuRUbf a").each((i, el) => {
      links[i] = $(el).attr("href");
    });
    $(".g .VwiC3b ").each((i, el) => {
      snippets[i] = $(el).text();
    });
    $(".g .yuRUbf .NJjxre .tjvcx").each((i, el) => {
      displayedLinks[i] = $(el).text();
    });

    const organicResults = [];

    for (let i = 0; i < titles.length; i++) {
      organicResults[i] = {
        title: titles[i],
        links: links[i],
        snippet: snippets[i],
        displayedLink: displayedLinks[i],
      };
    }

    res.send(organicResults);
  })
  .catch(error => {
    res.send("samaritan-error: " + error);
  });
});

app.get('*', function(req, res) {
  res.status(404).send("404");
});

http.listen(port, function() {
  console.log('listening on *:' + port);
});