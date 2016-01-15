import 'babel-polyfill'

import _ from 'lodash'
import { prime } from './util'

const n = 10001
let result = 3

for ( let i of _.range( n - 2 ) ) {
    result += 2
    while ( ! prime( result ) ) {
        result += 2
    }
}

console.log( result )
