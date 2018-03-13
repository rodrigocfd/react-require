'use strict';

define(['react'], function(React) {
	return class extends React.Component {
		render() {
			return (
				<div>
					<span>{this.props.label}</span>
					<input type="text"/>
				</div>
			);
		}
	};
});