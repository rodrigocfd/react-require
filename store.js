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