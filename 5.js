(function () {
    'use strict';

    var x = 0, i, no_divide,
    delta = 2 * 3 * 5 * 7 * 11 * 13 * 17 * 19;

    while (true) {
        x += delta;
        no_divide = false;
        for (i = 2; i <= 20; i += 1) {
            if (0 !== x % i) {
                no_divide = true;
                i = 20;
            }
        }
        if (! no_divide) {
            break;
        }
    }

    console.log(x);
}());
