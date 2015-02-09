console.log((function () {
    'use strict';

    var cache = {1:1, 2:2},

    fib = function (n) {
        if (! cache.hasOwnProperty(n)) {
            cache[n] = fib(n-1) + fib(n-2);
        }
        return cache[n];
    };

    return function (fib_max) {
        var total = 0, i = 0, f = 0;

        while (f < fib_max) {
            i += 1;
            f = fib(i);
            if (0 === f%2) {
                total += f;
            }
        }

        return total;
    };
}())(4000000));