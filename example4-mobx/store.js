/**
 * React with RequireJS
 * @author Rodrigo Cesar de Freitas Dias
 * @license MIT
 * @see https://github.com/rodrigocfd/react-require
 */

'use strict';

define(['mobx'],
function(MobX) {

	class Store {
		name = '';
	}

	MobX.decorate(Store, {
		name: MobX.observable
	});

	return new Store();
});