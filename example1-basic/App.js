/**
 * React with RequireJS
 * @author Rodrigo Cesar de Freitas Dias
 * @license MIT
 * @see https://github.com/rodrigocfd/react-requirejs
 */

'use strict';

define(['react'],
	function(React) {

	class App extends React.Component {
		render() {
			return (
				<h1>App component</h1>
			);
		}
	}

	return App;
});