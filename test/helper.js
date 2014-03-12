var http = require('http');
var Stream = require('stream');


exports.createServer = function () {

    var server = http.createServer();
    server.inject = function (method, path, callback) {

        var req = {
            method: method,
            path: path
        };

        var res = new Stream.PassThrough();
        res.result = '';
        res.on('readable', function () {

            res.result += res.read().toString();
        });

        server.emit('request', req, res);
        res.once('end', function () {

            callback(res);
        });
    };

    return server;
};