let format = date =>
    padStr(date.getHours()) + ':' +
    padStr(date.getMinutes()) + ' '+
    padStr(date.getDate()) + '.'+
    padStr(1 + date.getMonth()) + '.'+
    padStr(date.getFullYear());


function padStr(i) {
    return (i < 10) ? "0" + i : "" + i;
}

export default format;