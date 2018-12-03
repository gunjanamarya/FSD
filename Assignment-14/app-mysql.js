var mysql = require('mysql');

var con = mysql.createConnection({
    port: 3306
});

con.connect(function (err) {
    if (err) throw err;
    con.query("CREATE DATABASE testdbmysql", function (err, result) {
        if (err) throw err;
        console.log('Question 4 : testdbmysql created successfully !!!');
    });
    con.end();
    con = mysql.createConnection({
        port: 3306,
        database: 'testdbmysql'
    });
    con.query("CREATE TABLE employees (name VARCHAR(50), address VARCHAR(50))", function (err, result) {
        if (err) throw err;
        var emps = [
            ['Penny Robinson', 'Alpha-Centauri'],
            ['John Robinson', 'Alpha-Centauri']
        ]
        con.query("INSERT INTO employees(name,address) VALUES ?", [emps], function (err, result) {
            if (err) throw err;
            console.log('Question 5 : Employees data inserted')
            con.query("SELECT * FROM employees", function (err, result) {
                console.log('Question 6 : Employee details - ')
                console.log(result)
                con.end()
            });
        });
    });
});