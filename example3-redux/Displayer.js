/**
 * React with RequireJS
 * @author Rodrigo Cesar de Freitas Dias
 * @license MIT
 * @see https://github.com/rodrigocfd/react-require
 */

'use strict';

define(['react', 'react-redux'],
function(React, Redux) {

	const Displayer = ({title, name}) => (
		<div><b>{title}:</b> {name}</div>
	);

	return Redux.connect(
		({name}) => ({name})
	)(Displayer);
});