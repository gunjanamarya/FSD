var express = require('express');
var router = express.Router();
var Task = require('../models/Tasks');

router.get('/users',function(req,res,next){

Task.getUsers(function(err,rows){
    if(err) {
        res.json(err);
    }
    else {
    res.json(rows);
    }
    });
});

module.exports = router;