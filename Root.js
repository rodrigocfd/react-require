'use strict';

define(['react', 'react-redux', 'store', 'jsx!CustomInput'],
	function(React, ReactRedux, store, CustomInput) {

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

	const mapStateToProps = (state) => state;
	return ReactRedux.connect(mapStateToProps)(Root);
});