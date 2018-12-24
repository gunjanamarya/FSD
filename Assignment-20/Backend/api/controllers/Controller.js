var mongoose = require('mongoose');
var User = mongoose.model('User');
var Document = mongoose.model('Document');
var multer = require('multer');
var DIR = './uploads/';
var upload = multer(
    {
        dest: DIR,

    }).any();
var path = require('path');

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

exports.add_file = function (req, res) {
    upload(req, res, function (err) {
        if (err) {
            console.log(err);
            return res.status(422).send("an Error occured")
        }
        // console.log(req.files[0].formData)
        var doc = new Document({
            originalName: req.files[0].originalname,
            fileName: req.files[0].filename,
            type: req.files[0].mimetype,
            userId: req.body.userId,
            description: req.body.description
        });
        // console.log(doc)
        doc.save(function (err, doc) {
            if (err) res.json(err)
            res.json(doc)
        })
    });
}

exports.get_files = function (req, res) {
    var ObjectId = require('mongoose').Types.ObjectId;
    Document.find({ userId: new ObjectId(req.params.id) }, function (err, files) {
        if (err) res.json(err)

        res.json(files)
    })
}

exports.delete_file = function (req, res) {
    Document.deleteOne({ _id: req.params.id }, function (err, file) {
        if (err) res.json(err)
        res.json(file)
    })
}

exports.download_file = function (req, res) {
    filepath = path.join(__dirname, '../../uploads') + '/' + req.body.fileName
    res.sendFile(filepath)
}