import { range, prime } from './util'

const n = 600851475143
let result = 0

for ( let x of range( 2, Math.sqrt( n ) ) ) {
    if ( 0 === n % x && prime( x ) ) {
        result = x
    }
}

console.log( result )
