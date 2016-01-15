import 'babel-polyfill'

let sum_squares = ( n ) => {
    let total = 0
    while ( n > 0 ) {
        total += n * n
        n -= 1
    }
    return total
}

let square_sum = ( n ) => {
    let total = 0
    while ( n > 0 ) {
        total += n
        n -= 1
    }
    return total * total
}

const n = 100
let result = square_sum( n ) - sum_squares( n )

console.log( result )
