console.log((function (n) {
    'use strict';

    var total = 0, i;
    for (i=0; i<n; i+=1) {
        if (0 === i%3 || 0 === i%5) {
            total += i;
        }
    }

    return total;
}(1000)));