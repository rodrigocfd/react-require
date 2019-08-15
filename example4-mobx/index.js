/**
 * React with RequireJS
 * @author Rodrigo Cesar de Freitas Dias
 * @license MIT
 * @see https://github.com/rodrigocfd/react-require
 */

'use strict';

define(['react', 'react-dom', 'mobx-react', 'jsx!Root', 'jsx!store'],
function(React, ReactDOM, MobXReact, Root, store) {

	ReactDOM.render(
		<MobXReact.Provider store={store}>
			<Root />
		</MobXReact.Provider>,
		document.getElementById('root')
	);
});