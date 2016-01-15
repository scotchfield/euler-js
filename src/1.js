import 'babel-polyfill'

import _ from 'lodash'

function* values () {
	for ( let i of _.range( 1, 999 ) ) {
		if ( 0 === i % 3 || 0 === i % 5 ) {
			yield i
		}
	}
}

let result = 0

for ( let x of values() ) {
	result += x
}

console.log( result )
