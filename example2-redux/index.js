'use strict';

define(['react', 'react-dom', 'react-redux', 'store', 'jsx!Root'],
	function(React, ReactDOM, Redux, store, Root) {

	ReactDOM.render(
		<Redux.Provider store={store}>
			<Root/>
		</Redux.Provider>,
		document.getElementById('root')
	);
});