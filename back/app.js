var express = require('express'),
    app = express(),
    PORT = 5000,
    BEMHTML = require('../front/desktop.bundles/index/index.bemhtml.js').BEMHTML,
    layout = require('./views/layout'),
    server;

app.use(express.static(__dirname + './../public'));

app.get('/', function (req, res) {
  res.send(BEMHTML.apply(layout('SOME CONTENT')));
});

server = app.listen(PORT, function () {
    console.log('Example app listening at http://%s:%s',
        server.address().address, server.address().port);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// development error handler
// will print stacktrace
if (app.get('env') !== 'production') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});
