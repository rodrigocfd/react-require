'use strict';

define(['react', 'react-dom'], function(React, ReactDOM) {
	class Root extends React.Component {
		render() {
			return (
				<h1>Root component</h1>
			);
		}
	}

	ReactDOM.render(<Root/>, document.getElementById('root'));
});