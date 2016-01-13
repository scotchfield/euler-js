(function () {

    'use strict';

    var a, b, c;

    for (a = 1; a < 1000; a += 1) {
        for (b = a + 1; b < 1000; b += 1) {
            for (c = b + 1; c < 1000; c += 1) {
                if (a + b + c === 1000 && a * a + b * b === c * c) {
                    console.log(a + ', ' + b + ', ' + c + ': ' + a * b * c);
                    return;
                }
            }
        }
    }

}());