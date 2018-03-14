'use strict';

define(['react', 'react-redux'],
	function(React, Redux) {

	const Displayer = ({title, name}) => (
		<div><b>{title}:</b> {name}</div>
	);

	return Redux.connect(
		({name}) => ({name})
	)(Displayer);
});