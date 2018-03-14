'use strict';

define(['react', 'react-redux', 'jsx!CustomInput'],
	function(React, Redux, CustomInput) {

	@Redux.connect(state => ({
		name: state.name
	}))
	class Root extends React.Component {
		render() {
			return (
				<div>
					<h1>Root component</h1>
					<CustomInput label="Name"/>
					<p>Typed: {this.props.name}</p>
				</div>
			);
		}
	}

	return Root;
});