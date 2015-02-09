(function () {
    'use strict';

    var prime = function (n) {
        var i;
        if (n < 3) {
            return true;
        }
        for (i = 2; i < n / 2 + 1; i += 1) {
            if (0 === n % i) {
                return false;
            }
        }
        return true;
    };

    return function (n) {
        var i, p;
        for (i = 2; i < Math.sqrt(n); i += 1) {
            if (0 === n % i) {
                p = prime(i);
                if (true === p) {
                    console.log(i);
                }
            }
        }
    };
}())(600851475143);
