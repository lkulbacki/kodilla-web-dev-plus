'use strict';

{
    console.log('ES6');

    // Zadanie pierwsze
    console.log('--- string');
    var string1 = 'Hello';
    var string2 = 'World';
    console.log(string1 + ' ' + string2 + '!');

    // Zadanie drugie
    console.log('--- multiply');
    var multiply = function multiply(x) {
        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

        return x * y;
    };

    console.log(multiply(5, 2));
    console.log(multiply(5));

    // Zadanie trzecie
    console.log('--- average');

    var average = function average() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var result = 0;
        args.forEach(function (arg) {
            return result += arg;
        });
        return result / args.length;
    };

    console.log(average(1));
    console.log(average(1, 3));
    console.log(average(1, 3, 6, 6));

    // Zadanie czwarte
    console.log('--- grades');

    var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
    console.log(average.apply(undefined, grades));

    // Zadanie piąte
    console.log('Destrukturyzacja');

    var _ref = [1, 4, 'Iwona', false, 'Nowak'],
        firstname = _ref[2],
        lastname = _ref[4];

    console.log(firstname + ' ' + lastname);
}