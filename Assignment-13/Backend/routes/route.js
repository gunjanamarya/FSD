var express = require('express');
var router = express.Router();
var passport = require('passport')
var Task = require('../models/Tasks');

router.get('/users', function (req, res, next) {

    Task.getUsers(function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});

router.post('/login', passport.authenticate('local', {
    failureFlash: true
}), function (req, res) {
    res.json({ 'username': req.user.username });
});

router.get('/logout', function (req, res) {
    req.logOut();
    return res.json({ authenticated: req.isAuthenticated() });
});

module.exports = router;