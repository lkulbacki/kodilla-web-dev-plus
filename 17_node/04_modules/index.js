var OSinfo = require('./modules/osinfo');
var EventEmitter = require('events').EventEmitter;

// describing event emitter
var emitter = new EventEmitter();
emitter.on("beforeCommand", function (instruction) {
    console.log('You wrote: ' + instruction + ', trying to run command');
});
emitter.on("afterCommand", function () {
    console.log('Finished command');
});

process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function () {
    // metoda .read() ma za zadanie odczytać co użytkownik podał na wejściu
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        emitter.emit('beforeCommand', instruction);
        switch (instruction) {
            case '/exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
                break;
            case '/node':
                process.stdout.write(process.versions['node'] + "\n");
                break;
            case '/encoding':
                process.stdout.write(process.env['LC_CTYPE'] + "\n");
                break;
            case '/os':
                OSinfo.print();
                break;
            default:
                process.stderr.write('Wrong instruction!\n');
        }
        emitter.emit('afterCommand');
    }
});

// timeFormatter testing
//
// var timeFormatter = require('../modules/timeFormatter');
// console.log(timeFormatter.format(45, 's'));
// console.log(timeFormatter.format(233, 's'));
// console.log(timeFormatter.format(3520, 's'));
// console.log(timeFormatter.format(33520, 's'));
// console.log(timeFormatter.format(933520, 's'));
// console.log(timeFormatter.format(45, 'h'));
