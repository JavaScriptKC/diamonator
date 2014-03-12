var Diamonator = function (server) {

    var self = this;

    this._routes = {};
    server.on('request', function (req, res) {

        var route = self._route(req.method, req.path);
        if (route) {
            return route(req, res);
        }

        res.writeHead(404);

    });
};

Diamonator.prototype.register = function (route, callback) {

    this._routes[route.method] = this._routes[route.method] || {};
    this._routes[route.method][route.path] = callback;
};


Diamonator.prototype._route = function (method, path) {

    return this._routes[method][path];
};

module.exports = Diamonator;