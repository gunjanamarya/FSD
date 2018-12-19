var mongoose = require('mongoose');
var User = mongoose.model('User');

exports.get_users = function (req, res) {
    User.find(function (err, users) {
        if (err) res.json(err)
        res.json(users)
    })
}

exports.add_user = function (req, res) {
    var user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        ssoId: req.body.ssoId
    });
    user.save(function (err, user) {
        if (err) res.json(err)
        res.json(user)
    })
}