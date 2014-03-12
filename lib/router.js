function Diamonator(http) {
    http.on('request', function(req, res) {
        console.log(req.path);
    });
}

module.exports = Diamonator;