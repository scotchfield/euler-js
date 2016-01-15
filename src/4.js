import { range } from './util'

function palindrome ( p ) {
    for ( let i of range( 0, p.length / 2 ) ) {
        if ( p[i] !== p[p.length - i - 1] ) {
            return false
        }
    }

    return true
}

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
