'use strict';

function* range( start, max ) {
    for ( let i = start; i <= max; i += 1 ) {
        yield i
    }
}

function prime( x ) {
    if ( x < 2 ) {
        return false
    } else if ( x === 2 ) {
        return true
    }

    for ( let i of range( 2, Math.sqrt( x ) ) ) {
        if ( 0 === x % i ) {
            return false
        }
    }

    return true
}

const n = 600851475143

for ( let x of range( 2, Math.sqrt( n ) ) ) {
    if ( 0 === n % x && prime( x ) ) {
        console.log( x )
    }
}
