var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path');
var route = require('./routes/route');
var app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', route);

app.listen(port,()=>{
    console.log('Node running @ port ', port);
})

module.exports = app;