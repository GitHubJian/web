var http = require('http');
var fs = require('fs');

var router = require('./router');
var server = require('./server');

server.start(router.route);
