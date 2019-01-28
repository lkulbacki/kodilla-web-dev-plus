var fs = require('fs');

function readFilePromisified(filename) {
    return new Promise(
        (resolve, reject) => {
            fs.readFile(filename, { encoding: 'utf8' },
                (error, data) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data);
                    }
                });
        });
}

readFilePromisified('../plik-do-odczytu.txt')
    .then(text => console.log(text)) //tutaj 'wyrzucamy' zawartość pliku w console.log, ale możesz wykorzystać ją w dowolny sposób
    .catch(error => console.log(error));