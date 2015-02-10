(function () {

    'use strict';

    var primes = [2, 3],

    prime = function (n) {
        var i;

        for (i = 0; i < primes.length; i += 1) {
            if (n % primes[i] === 0) {
                return false;
            }
        }

        primes.push(n);
        return true;
    };

    return function (n) {
        var i, sum = 2 + 3;

        for (i = 5; i < n; i += 2) {
            if (prime(i)) {
                sum += i;
            }
        }

        console.log(sum);
    };

}())(2000000);
