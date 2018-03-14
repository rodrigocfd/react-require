'use strict';

define(['redux'],
	function(Redux) {

	function reducer(state = {}, {type, payload}) {
		switch (type) {
		case 'setName':
			return payload;
		default:
			return state;
		}
	}

	return Redux.createStore(reducer);
});