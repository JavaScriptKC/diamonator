var Http = require('http');
var lab = require('lab');
var Diamonator = require('../');


// Test shortcuts

var expect = lab.expect;
var before = lab.before;
var after = lab.after;
var describe = lab.experiment;
var it = lab.test;


describe('register routes', function () {

    it('GET /', function (done) {

        var server = Http.createServer(function (req, res) {

            diamonator.route(req.method, req.path);
        });

        var fn = function () {


        };

        var diamonator = new Diamonator();
        diamonator.register({ method: 'GET', path: '/' }, fn);


    });
});