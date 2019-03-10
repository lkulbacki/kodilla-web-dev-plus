var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');
var stringifyFile;

var app = express();
app.use(bodyParser.json());

app.get('/getNote', function(req, res) {
    fs.readFile('./test.json', 'utf8', function(err, data) {
        if (err) throw err;
        stringifyFile = data;
        res.send(data);
    });
});

app.put('/updateNote/:note', function(req, res){
    console.log(stringifyFile);
    stringifyFile += req.params.note;
    console.log(stringifyFile);
    fs.writeFile('./test.json', stringifyFile, function(err) {
        if (err) throw err;
        console.log('file updated');
    });
});

var server = app.listen(3000);
