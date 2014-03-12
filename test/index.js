var lab = require('lab');
var Helper = require('./helper');
var Diamonator = require('../');


// Test shortcuts

var expect = lab.expect;
var before = lab.before;
var after = lab.after;
var describe = lab.experiment;
var it = lab.test;


describe('register routes', function () {

    it('GET /', function (done) {

        var server = Helper.createServer();
        var diamonator = new Diamonator(server);
        diamonator.register({ method: 'GET', path: '/' }, function (req, res) {

            res.write('OK');
            res.end();
        });

        server.inject('GET', '/', function (res) {

            expect(res.result).to.equal('OK');
            done();
        });
    });
});