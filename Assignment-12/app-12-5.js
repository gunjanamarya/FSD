var fs = require('fs');
var http = require('http');

fs.readFile('sample.json', 'utf8', function (err, data) {
    if (err) throw err;
    console.log('Please visit http://localhost:8080 in browser');
    http.createServer(function (req, res) {
        res.writeHead(200, { 'Content-type': 'application/json' });
        res.write(data);
        res.end();
    }).listen(8080);
})