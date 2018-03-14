/**
 * React with RequireJS
 * @author Rodrigo Cesar de Freitas Dias
 * @license MIT
 * @see https://github.com/rodrigocfd/react-requirejs
 */

'use strict';

define(['react', 'react-redux'],
	function(React, Redux) {

	@Redux.connect()
	class CustomInput extends React.Component {
		txt = null;

		onChange = () => {
			this.props.dispatch({
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
	}

	return CustomInput;
});