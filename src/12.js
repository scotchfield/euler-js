console.log((function () {

    'use strict';

    var factors = function (n) {
        var i, f = 1;
        for (i = 2; i <= n / 2; i += 1) {
            if (n % i === 0) {
                f += 1;
            }
        }
        if (n > 1) {
            f += 1;
        }
        return f;
    };

    return function (divisors) {
        var i = 0, n = 0;
        while (true) {
            i += 1;
            n += i;
            if (factors(n) >= divisors) {
                break;
            }
        }
        return n;
    };

}())(500));
