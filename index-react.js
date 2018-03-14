'use strict';

define(['react', 'react-dom', 'react-redux', 'store', 'jsx!Root'],
	function(React, ReactDOM, ReactRedux, store, Root) {

	ReactDOM.render(
		<ReactRedux.Provider store={store}>
			<Root/>
		</ReactRedux.Provider>,
		document.getElementById('root')
	);
});