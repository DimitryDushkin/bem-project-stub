var express = require('express'),
    app = express();

app.use(express.static('../public'));

global.BEMHTML = require('../front/desktop.bundles/index/index.bemhtml.js').BEMHTML;

app.get('/', function (req, res) {
  res.send(BEMHTML.apply(require('./layout')('SOME CONTENT')));
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
