const { response } = require('express');
var express = require('express');
var router = express.Router();
var app = express();

const RapidApi = require('../models/TestAndCodeApi');
const options = {
  method: 'GET',
  url: 'https://test-and-code.p.rapidapi.com/posts',
  headers: {
    'x-rapidapi-key': '6b3b897670msh1228fadd1b2f5d3p138838jsn8d85258c3018',
    'x-rapidapi-host': 'test-and-code.p.rapidapi.com',
    useQueryString: true
  }
};
// Home page route.
router.get('/test', function (req, res) {
  RapidApi.call_API(options).then(function(data){
    res.send(JSON.parse(data));
  })
})

// Support portal route.
router.get('/support-portal', function (req, res) {
  res.send('Some more content that we changed some more and more and some more');
})

// MONGODB Route.
router.get('/example-data', function (req, res) {
  res.send('Some more content that we changed some more and more and some more');
})


module.exports = router;