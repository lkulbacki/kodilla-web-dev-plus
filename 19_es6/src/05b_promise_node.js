var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function httpGet(url) {
    return new Promise(
        function(resolve, reject) {
            const request = new XMLHttpRequest();
            request.onload = function() {
                if (this.status === 200) {
                    // resolve(this.response); // Sukces
                    resolve('Wiadomość zwracana in case of success');
                } else {
                    reject(new Error(this.statusText)); // Dostaliśmy odpowiedź, ale jest to np 404
                }
            };
            request.onerror = function() {
                reject(new Error(
                    `XMLHttpRequest Error: ${this.statusText}`));
            };
            request.open('GET', url);
            request.send();
        });
}

httpGet('https://www.w3.org/TR/PNG/iso_8859-1.txt')
    // .then(response => console.log('Contents: ' + response))
    .then(parametrKtoryBedzieZawieralToCoWrzuciszWPromiseJakoParametrResolve => console.log('Contents: ' + parametrKtoryBedzieZawieralToCoWrzuciszWPromiseJakoParametrResolve))
    .catch(error => console.error('Something went wrong', error));


function delay(ms) {
    return new Promise(function(resolve, reject) {
        setTimeout(resolve, ms);
    });
}

delay(3000)
    .then(() => console.log('3 seconds have passed!'));