process.stdin.setEncoding('utf-8');

function formatTime(timeValue, timeUnit) {
    switch(timeUnit){
        case 's':
            return returnTimeString(timeValue);
        case 'm':
        case 'h':
        case 'd':
            return returnTimeString(convertToSeconds(timeValue, timeUnit));
    }
}

function convertToSeconds(timeValue, timeUnit) {
    switch(timeUnit){
        case 's':
            return timeValue;
        case 'm':
            return timeValue * 60;
        case 'h':
            return timeValue * 60 * 60;
        case 'd':
            return timeValue * 60 * 60 * 24;
    }
}

function returnTimeString(timeValueInSeconds){
    var days = 0;
    var hours = 0;
    var minutes = 0;
    var seconds = 0;
    days = Math.floor(timeValueInSeconds / (3600 * 24));
    timeValueInSeconds = timeValueInSeconds % (3600*24);
    hours = Math.floor(timeValueInSeconds / (3600));
    timeValueInSeconds = timeValueInSeconds % 3600;
    minutes = Math.floor(timeValueInSeconds / 60);
    seconds = timeValueInSeconds % 60;
    return (days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's');
}


exports.format = formatTime;
