var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var PORT = 3000;

require('./app/routing/htmlRoutes')(app);
require('./app/routing/apiRoutes')(app);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}));
// parse application/json
app.use(bodyParser.json());

app.listen(PORT, function() {
  console.log('Listening to port:', PORT);
});
