var db = require('../dbconnection');

var Task={ 
    getUsers:function(callback){     
    return db.query("Select * from `users`",callback);     
    }
}

module.exports = Task;