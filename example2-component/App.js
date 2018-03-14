/**
 * React with RequireJS
 * @author Rodrigo Cesar de Freitas Dias
 * @license MIT
 * @see https://github.com/rodrigocfd/react-requirejs
 */

'use strict';

define(['react', 'jsx!Another'],
	function(React, Another) {

	class App extends React.Component {
		render() {
			return (
				<div>
					<h1>App component</h1>
					<Another text="A child component"/>
				</div>
			);
		}
	}

	return App;
});