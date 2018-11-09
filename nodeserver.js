'use strict';
const express = require('express');
const app = express();
const port = 3001;
const yelp = require('yelp-fusion');
const apiKey = 'QteV0iU5d1seg7X2tBC_McX2Z89Z9HEhM_NaRQRbaeCO5JT-DbGdxLRwmQ5nEoL8j7_OmNAcIMWq_jB6ldk4Qyf5YsWKGL0voLX-YAmRxGuocfzGHccP0wPSrh7dW3Yx'

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const searchRequest = {
  term:'Four Barrel Coffee',
  location: 'san francisco, ca'
};

const client = yelp.client(apiKey);


app.get('/yelp/api', (req, res, next) => {
  client.search(searchRequest).then(response => {
  const firstResult = response.jsonBody.businesses[0];
  const prettyJson = JSON.stringify(firstResult, null, 4);
  res.send(prettyJson)});
});

app.listen(port, () => console.log(`server is on port ${port} boi`))


