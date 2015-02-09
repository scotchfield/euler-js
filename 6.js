console.log((function () {
    'use strict';

    var SumSquares = function (n) {
        var total = 0;
        while (n > 0) {
            total += n * n;
            n -= 1;
        }
        return total;
    },
    SquareSum = function (n) {
        var total = 0;
        while (n > 0) {
            total += n;
            n -= 1;
        }
        return total * total;
    };

    return function (n) {
        return SquareSum(n) - SumSquares(n);
    };
}())(100));
