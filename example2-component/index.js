/**
 * React with RequireJS
 * @author Rodrigo Cesar de Freitas Dias
 * @license MIT
 * @see https://github.com/rodrigocfd/react-require
 */

'use strict';

define(['react', 'react-dom', 'jsx!App'],
	function(React, ReactDOM, App) {

	ReactDOM.render(
		<App/>,
		document.getElementById('app')
	);
});