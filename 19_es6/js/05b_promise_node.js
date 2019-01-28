'use strict';

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function httpGet(url) {
    return new Promise(function (resolve, reject) {
        var request = new XMLHttpRequest();
        request.onload = function () {
            if (this.status === 200) {
                // resolve(this.response); // Sukces
                resolve('Wiadomość zwracana in case of success');
            } else {
                reject(new Error(this.statusText)); // Dostaliśmy odpowiedź, ale jest to np 404
            }
        };
        request.onerror = function () {
            reject(new Error('XMLHttpRequest Error: ' + this.statusText));
        };
        request.open('GET', url);
        request.send();
    });
}

httpGet('https://www.w3.org/TR/PNG/iso_8859-1.txt')
// .then(response => console.log('Contents: ' + response))
.then(function (parametrKtoryBedzieZawieralToCoWrzuciszWPromiseJakoParametrResolve) {
    return console.log('Contents: ' + parametrKtoryBedzieZawieralToCoWrzuciszWPromiseJakoParametrResolve);
}).catch(function (error) {
    return console.error('Something went wrong', error);
});

function delay(ms) {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, ms);
    });
}

delay(3000).then(function () {
    return console.log('3 seconds have passed!');
});