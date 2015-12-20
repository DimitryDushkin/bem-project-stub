var express = require('express'),
    app = express();

const PORT = 5000;

app.use(express.static(__dirname + './../public'));

global.BEMHTML = require('../front/desktop.bundles/index/index.bemhtml.js').BEMHTML;

app.get('/', function (req, res) {
  res.send(BEMHTML.apply(require('./layout')('SOME CONTENT')));
});

var server = app.listen(PORT, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
