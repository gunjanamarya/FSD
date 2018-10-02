var fs = require('fs');

fs.readFile('sample.txt', 'utf8', function (err, data) {
    if (err) throw err;
    fs.writeFile('write-sample.txt', data, function (err) {
        if (err) throw err;
        console.log('File written successfully !!')
    });
})