import 'babel-polyfill'

export function palindrome ( p ) {
    for ( let i of range( 0, p.length / 2 ) ) {
        if ( p[i] !== p[p.length - i - 1] ) {
            return false
        }
    }

    return true
}

export function prime ( x ) {
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

export function* range ( start, max ) {
    for ( let i = start; i <= max; i += 1 ) {
        yield i
    }
}

export default {}
