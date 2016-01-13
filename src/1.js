'use strict'

const n = 1000
let total = 0

for ( let i of Array( n ).keys() ) {
	if ( 0 === i % 3 || 0 === i % 5 ) {
		total += i
	}
}

console.log( total )
