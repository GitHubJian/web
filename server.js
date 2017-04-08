var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');
var mime = require('mime');

function start(route) {
    http.createServer(function (request, response) {
        var pathname = url.parse(request.url).pathname;
        route(pathname);
        if (pathname === '/') {
            pathname = '/index.html';
        }
        fs.exists(pathname.substr(1), function (exists) {
            if (!exists) {
                response.writeHead(404, {
                    'Content-type': 'text/plain'
                });
                response.write('No Found!!!');
                response.end();
            } else {
                var ext = path.extname(pathname);
                ext = ext ? ext.slice(1) : 'unknown';

                var contenttype = mime.lookup(pathname);
                //判断图片
                if (contenttype.indexOf('image')) {
                    fs.readFile(pathname.slice(1), function (err, data) {
                        response.writeHead(200, { 'Content-type': contenttype });
                        response.write(data, 'binary');
                        response.end();
                    })
                } else {
                    fs.readFile(pathname.slice(1), function (err, data) {
                        response.writeHead(200, { 'Content-type': contenttype });
                        response.write(data);
                        response.end();
                    })
                }
            }
        });
    }).listen(1337, '127.0.0.1');
}


exports.start = start;