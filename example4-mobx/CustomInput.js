/**
 * React with RequireJS
 * @author Rodrigo Cesar de Freitas Dias
 * @license MIT
 * @see https://github.com/rodrigocfd/react-require
 */

'use strict';

define(['react', 'mobx-react'],
function(React, MobXReact) {

	@MobXReact.inject('store')
	class CustomInput extends React.Component {
		txt = null;

		onChange = () => {
			this.props.store.name = this.txt.value;
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
						onChange={this.onChange} />
				</div>
			);
		}
	}

	return CustomInput;
});