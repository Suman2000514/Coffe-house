var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  let dataArray = [
    { name: "John", age: 11 },
    { name: "Wade", age: 9 },
    { name: "Sim", age: 16 },
  ];

  res.json({
    data: dataArray
  });
  
});

module.exports = router;
