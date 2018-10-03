exports.add = function (a, b) {
    return a + b;
}

exports.sub = function (a, b) {
    return a - b;
}

exports.product = function (a, b) {
    return a * b;
}

exports.division = function (a, b) {
    if (b != 0) {
        return a / b;
    }
}