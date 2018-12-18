'use strict';

var fs = require('fs');

function readFilePromisified(filename) {
    return new Promise(function (resolve, reject) {
        fs.readFile(filename, { encoding: 'utf8' }, function (error, data) {
            if (error) {
                reject(error);
            } else {
                resolve(data);
            }
        });
    });
}

readFilePromisified('../plik-do-odczytu.txt').then(function (text) {
    return console.log(text);
}) //tutaj 'wyrzucamy' zawartość pliku w console.log, ale możesz wykorzystać ją w dowolny sposób
.catch(function (error) {
    return console.log(error);
});