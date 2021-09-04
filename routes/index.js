var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//request, response
router.get("/twelve", ( req, res )=>{
  console.log( req.url );
  res.send("Welcome to zone 12");
});

//http://localhost:3000/zone/add?a=1&b=2
router.get("/add", (req, res)=>{
  let a = parseInt(req.query.a), 
      b = parseInt(req.query.b);
  res.send( a + " + " + b + " = " + (a + b) );
});

module.exports = router;
