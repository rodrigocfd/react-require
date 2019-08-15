/**
 * React with RequireJS
 * @author Rodrigo Cesar de Freitas Dias
 * @license MIT
 * @see https://github.com/rodrigocfd/react-require
 */

'use strict';

define(['react', 'jsx!Another'],
function(React, Another) {

	const App = () => (
		<div>
			<h1>App component</h1>
			<Another text="A child component" />
		</div>
	);

	return App;
});