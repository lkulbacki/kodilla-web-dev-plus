var http = require('http');
var fs = require('fs');
var server = http.createServer();
server.on('request', function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/') {
        fs.readFile('index.html', 'utf-8', function (err, data) {
            response.write(data);
            response.end();
        });
    }
    else if (request.method === 'GET' && request.url === '/hello') {
        response.write('<h1>Hello World!</h1>');
        response.end();
    } else {
        response.setHeader("Content-Type", "image/jpeg; charset=utf-8");
        response.statusCode = 404;
        fs.readFile('404.jpeg', function (err, data) {
            response.write(data);
            response.end();
        });
    }
});

server.listen(9000);
