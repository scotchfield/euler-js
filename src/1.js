'use strict'

function* values () {
	const n = 1000
	for ( let i of Array( n ).keys() ) {
		if ( 0 === i % 3 || 0 === i % 5 ) {
			yield i
		}
	}
}

let total = 0

for ( let x of values() ) {
	total += x
}

console.log( total )
