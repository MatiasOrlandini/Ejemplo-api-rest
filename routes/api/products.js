var express = require('express');
var data = require('../../data/products');
var router = express.Router();
var _ = require('lodash');
var id = null;

router.get('/', function (req, res) {
  res.json(data);
});

var findProducById = function(product) {
  return product.id == id;
};

router.get('/:id', function (req, res) {
  id = req.params.id;
  console.log(id);
  var product = _.filter(data.list, findProducById);
  if(_.size(product) > 0) {
    res.send(product);
  }
  else {
    res.status(404);
    res.send('<h1>404 Not Found</h1>')
  }
});



module.exports = router;
