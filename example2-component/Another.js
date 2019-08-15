/**
 * React with RequireJS
 * @author Rodrigo Cesar de Freitas Dias
 * @license MIT
 * @see https://github.com/rodrigocfd/react-require
 */

'use strict';

define(['react'],
function(React) {

	class Another extends React.Component {
		render() {
			return (
				<div><b>The text is:</b> {this.props.text}</div>
			);
		}
	}

	return Another;
});