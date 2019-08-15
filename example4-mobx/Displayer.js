/**
 * React with RequireJS
 * @author Rodrigo Cesar de Freitas Dias
 * @license MIT
 * @see https://github.com/rodrigocfd/react-require
 */

'use strict';

define(['react', 'mobx-react'],
function(React, MobXReact) {

	const Displayer = ({title, store}) => (
		<div><b>{title}:</b> {store.name}</div>
	);

	return MobXReact.inject('store')(
		MobXReact.observer(Displayer)
	);
});