(function () {
    'use strict';

    var x, y, total, largest = {'x': 0, 'y': 0, 'total': 0},

    palindrome = function (x) {
        var i;

        if (typeof x !== 'string') {
            return false;
        }

        for (i = 0; i < x.length / 2; i += 1) {
            if (x[i] !== x[x.length - i - 1]) {
                return false;
            }
        }

        return true;
    };

    for (x = 100; x < 1000; x += 1) {
        for (y = 100; y < 1000; y += 1) {
            total = x * y;
            if (total > largest.total && palindrome(String(total))) {
                largest = {'x': x, 'y': y, 'total': total};
            }
        }
    }

    console.log(largest);

}());