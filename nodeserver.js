require('dotenv').config();
const express = require('express');
const app = express();
const port = 4000;
const yelp = require('yelp-fusion');
const cors = require('cors');
const apiKey = process.env.REACT_APP_API_KEY;
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const searchRequest = {
  limit: 50,
  term: 'food',
  location: '89129'
};

app.post('/location', (req, res) => {
    searchRequest.term = req.body.term;
    searchRequest.location = req.body.location;
});

const client = yelp.client(apiKey);

app.get('')

app.get('/yelp/api', (req, res, next) => {
  client.search(searchRequest).then(response => {
  const firstResult = response.jsonBody.businesses;
  const prettyJson = JSON.stringify(firstResult, null, 4);
  res.send(prettyJson)});
});

app.listen(port, () => console.log(`server is on port ${port} boi`))
