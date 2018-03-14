'use strict';

define(['react', 'store'],
	function(React, store) {

	return class extends React.Component {
		txt = null;

		onChange = () => {
			store.dispatch({
				type: 'setName',
				payload: { name: this.txt.value }
			});
		};

		componentDidMount() {
			this.txt.focus();
		}

		render() {
			return (
				<div>
					<span>{this.props.label}</span>
					<input type="text"
						ref={e => this.txt = e}
						onChange={this.onChange}/>
				</div>
			);
		}
	};
});