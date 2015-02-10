(function () {

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
        var p = 3, i = 2;
        while (i < n) {
            p += 2;
            if (prime(p)) {
                i += 1;
            }
        }
        console.log(i + ': ' + p);
    }

}())(10001);
