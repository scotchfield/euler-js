'use strict'

function* fibonacci () {
	let f1 = 0, f2 = 1, current = 0
	while ( current <= 4000000 ) {
		current = f1
		f1 = f2
		f2 = current + f1
		yield current
	}
}

let total = 0

for ( let x of fibonacci() ) {
	if ( 0 === x % 2 ) {
		total += x
	}
}

console.log( total )
