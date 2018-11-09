'use strict';
require('dotenv').config();
const express = require('express');
const app = express();
const port = 3001;
const yelp = require('yelp-fusion');
const apiKey = process.env.REACT_APP_API_KEY;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const searchRequest = {
  term:'Brew Tea Bar',
  location: 'Las Vegas, NV'
};

const client = yelp.client(apiKey);


app.get('/yelp/api', (req, res, next) => {
  client.search(searchRequest).then(response => {
  const firstResult = response.jsonBody.businesses[0];
  const prettyJson = JSON.stringify(firstResult, null, 4);
  res.send(prettyJson)});
});

app.listen(port, () => console.log(`server is on port ${port} boi`))


