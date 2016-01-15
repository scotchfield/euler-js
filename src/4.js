import 'babel-polyfill'

import _ from 'lodash'
import { palindrome } from './util'

let result = 0

for ( let x of _.range( 100, 999 ) ) {
    for ( let y of _.range( 100, 999 ) ) {
        let total = x * y
        if ( total > result && palindrome( String( total ) ) ) {
            result = total
        }
    }
}

console.log( result )
