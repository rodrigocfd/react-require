'use strict';

define(['react', 'react-dom', 'jsx!CustomInput'],
	function(React, ReactDOM, CustomInput) {

	class Root extends React.Component {
		render() {
			return (
				<div>
					<h1>Root component</h1>
					<CustomInput label="Name"/>
				</div>
			);
		}
	}

	ReactDOM.render(<Root/>, document.getElementById('root'));
});