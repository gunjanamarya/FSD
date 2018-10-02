var fs = require('fs');
var http = require('http');

fs.readFile('sample.html', 'utf8', function (err, data) {
    if (err) throw err;
    console.log('Please visit http://localhost:8080 in browser');
    http.createServer(function (req, res) {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write(data);
        res.end();
    }).listen(8080);
});