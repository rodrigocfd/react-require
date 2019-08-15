/**
 * React with RequireJS
 * @author Rodrigo Cesar de Freitas Dias
 * @license MIT
 * @see https://github.com/rodrigocfd/react-require
 */

'use strict';

define(['react', 'jsx!CustomInput', 'jsx!Displayer'],
function(React, CustomInput, Displayer) {

	return () => (
		<div>
			<h1>Root component</h1>
			<CustomInput label="Name" />
			<Displayer title="Typed" />
		</div>
	);
});