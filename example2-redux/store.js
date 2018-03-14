/**
 * React with RequireJS
 * @author Rodrigo Cesar de Freitas Dias
 * @license MIT
 * @see https://github.com/rodrigocfd/react-requirejs
 */

'use strict';

define(['redux'],
	function(Redux) {

	const initialState = {
		name: ''
	};

	function reducer(state, {type, payload}) {
		switch (type) {
		case 'setName':
			return {
				...state,
				name: payload.name
			};
		default:
			return state;
		}
	}

	return Redux.createStore(reducer, initialState);
});