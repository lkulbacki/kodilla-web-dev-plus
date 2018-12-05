var http = require('http');
var colors = require('colors');

var handlers = require('./handlers'); // nasz moduł

function start() {
    function onRequest(request, response) {
        console.log("INFO Odebrano zapytanie.".green);
        console.log("INFO Zapytanie " + request.url + " odebrane.");
        var paramSeparatorIndex = request.url.toString().indexOf("?");
        var urlParams = null;
        if (paramSeparatorIndex > -1) {
            urlParams = request.url.toString().substr(paramSeparatorIndex + 1);
            request.url = request.url.toString().substr(0, paramSeparatorIndex);
        }
        console.log('INFO urlParams: ' + urlParams);
        console.log('INFO request.url : ' + request.url);
        response.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"});

        switch (request.url) { // switch rozróżniający zapytania
            case '/':
            case '/start':
                handlers.welcome(request, response);
                break;
            case '/upload':
                handlers.upload(request, response);
                break;
            case '/show':
                handlers.show(request, response, urlParams);
                break;
            default:
                handlers.error(request, response);
        }
    }

    http.createServer(onRequest).listen(9000);

    console.log("INFO Uruchomiono serwer!".green);
}

exports.start = start;
