const { COOKIE_NAME, SECRET } = require('../config/config');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

module.exports = function () {
    return (req, res, next) => {
        let token = req.cookies[COOKIE_NAME];
        if (token) {
            jwt.verify(token, SECRET, function (err, decoded) {
                if (err) {
                    res.clearCookie(COOKIE_NAME)
                } else {
                    res.user = decoded;
                }
            });

        }
        next();
    }
}