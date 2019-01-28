var fs = require('fs');
var formidable = require('formidable');

exports.upload = function (request, response) {
    console.log("Rozpoczynam obsługę żądania upload.");
    var form = new formidable.IncomingForm();
    form.parse(request, function (error, fields, files) {
        fs.renameSync(files.upload.path, files.upload.name);
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write("received image:<br/>");
        response.write("<img src='/show?" + files.upload.name + "' />");
        response.end();
    });
};

exports.welcome = function (request, response) {
    console.log("Rozpoczynam obsługę żądania welcome.");
    fs.readFile('templates/start.html', function (err, html) {
        response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
        response.write(html);
    });
};

exports.css = function (request, response) {
    console.log("Rozpoczynam obsługę żądania css.");
    fs.readFile('./css/style.css', function (err, css) {
        response.writeHead(200, {"Content-Type": "text/css; charset=utf-8"});
        response.write(css);
        response.end();
    });
};

exports.error = function (request, response) {
    console.log("ERROR Nie wiem co robić.".red);
    response.writeHead(404, {"Content-Type": "text/html; charset=utf-8"});
    response.write("404 :(");
    response.end();
};

exports.show = function (request, response, filename) {
    console.log("INFO Wysyłam zdjęcie o nazwie: " + decodeURI(filename));
    fs.readFile(decodeURI(filename), "binary", function (error, file) {
        response.writeHead(200, {"Content-Type": "image/png"});
        response.write(file, "binary");
        response.end();
    });
};
