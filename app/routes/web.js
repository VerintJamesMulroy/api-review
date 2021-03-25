const { response } = require('express');
var express = require('express');
var router = express.Router();
var app = express();
const index = require( '../views/index' )
// Home page route.
router.get('/', function( req, res ){
  res.send
});
router.get('/status', function (req, res) {
  //Lets do some API status infomation here
});

// // Support portal route.
// router.get('/support-portal', function (req, res) {
//   res.send('Some more content that we changed some more and more and some more');
// })

// // MONGODB Route.
// router.get('/example-data', function (req, res) {
//   res.send('Some more content that we changed some more and more and some more');
// })


module.exports = router;