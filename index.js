'use strict';

requirejs.config({
	paths: {
		'react': 'https://cdnjs.cloudflare.com/ajax/libs/react/16.2.0/umd/react.production.min',
		'react-dom': 'https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.2.0/umd/react-dom.production.min',
		'redux': 'https://cdnjs.cloudflare.com/ajax/libs/redux/3.7.2/redux.min',
		'react-redux': 'https://cdnjs.cloudflare.com/ajax/libs/react-redux/5.0.7/react-redux.min',
		'babel': 'https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.26.0/babel.min',
		'jsx': 'jsx'
	}
});

require(['jsx!index-react']);