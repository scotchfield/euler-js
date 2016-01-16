import 'babel-polyfill'

import _ from 'lodash'

let result = 0

for ( let a of _.range( 1, 1000 ) ) {
    for ( let b of _.range( a + 1, 1000 ) ) {
        for ( let c of _.range( b + 1, 1000 ) ) {
            if ( a + b + c === 1000 && a * a + b * b === c * c ) {
                result = a * b * c
            }
        }
    }
}

console.log( result )
