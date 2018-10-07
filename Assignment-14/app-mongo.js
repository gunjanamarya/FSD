const mongoose = require('mongoose');
const Employee = require('./schema/Employee');

mongoose.connect('mongodb://localhost/test-db-mongo', { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Can not connect to db :('));

db.once('open', function () {
    console.log('Question 1 : test-db-mongo created successfully !!!');
    var emps = [{
        name: 'Will Robinson',
        age: 25,
        city: 'Alpha-Centauri'
    }, {
        name: 'Judy Robinson',
        age: 26,
        city: 'Alpha-Centauri'
    }]
    Employee.insertMany(emps, function (error, docs) {
        if (error) {
            console.log(error);
        }
        else {
            console.log('Question 2 : Employee data inserted');
            Employee.find(function (error, emps) {
                if (error) {
                    console.log(error);
                }
                else {
                    console.log('Question 3 : Employee details - ');
                    console.log(emps);
                    db.close();
                }
            });
        }
    });
});