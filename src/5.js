import 'babel-polyfill'

import _ from 'lodash'

const delta = 2 * 3 * 5 * 7 * 11 * 13 * 17 * 19;
let result = 0;

while ( true ) {
    let no_divide = false;

    result += delta;

    for ( let i of _.range( 2, 20 ) ) {
        if ( 0 !== result % i ) {
            no_divide = true;
            break;
        }
    }

    if ( ! no_divide ) {
        break;
    }
}

console.log( result );
