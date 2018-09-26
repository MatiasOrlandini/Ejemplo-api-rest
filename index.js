var express = require('express');
var api = require('./routes/api');
var dynamic = require('./routes/dynamic');

var app = express();
var port = 3000;

app.use('/static', express.static('assets'));
app.use('/api', api);
app.use('/', dynamic);

app.listen(port, function () {
  console.log('API REST on localhost:'+ port);
});
