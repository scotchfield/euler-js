import { range, palindrome } from './util'

let largest = 0

for ( let x of range( 100, 999 ) ) {
    for ( let y of range( 100, 999 ) ) {
        let total = x * y
        if ( total > largest && palindrome( String( total ) ) ) {
            largest = total
        }
    }
}

console.log( largest )
