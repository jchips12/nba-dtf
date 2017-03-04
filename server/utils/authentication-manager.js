var service = {
    authenticate: function (req, res, next) {
        var auth;
        if (req.headers.authorization) {
            auth = new Buffer(req.headers.authorization.substring(6), 'base64')
                .toString().split(':');
        }
        if (!auth || auth[0] !== 'username' || auth[1] !== 'password') {
            res.statusCode = 401;
            res.setHeader('WWW-Authenticate', 'Basic realm="BadEggsRealm"');
            res.end('Unauthorized');
        } else {
            req.authenticated = true;
            next();
        }
    }
}

module.exports = service;
