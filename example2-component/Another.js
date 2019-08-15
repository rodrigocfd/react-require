/**
 * React with RequireJS
 * @author Rodrigo Cesar de Freitas Dias
 * @license MIT
 * @see https://github.com/rodrigocfd/react-require
 */

'use strict';

define(['react'],
function(React) {

	const Another = ({text}) => (
		<div>
			<b>The text is:</b> {text}
		</div>
	);

	return Another;
});