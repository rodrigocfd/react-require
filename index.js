'use strict';

requirejs.config({
	paths: {
		'react': 'https://cdnjs.cloudflare.com/ajax/libs/react/16.2.0/umd/react.production.min',
		'react-dom': 'https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.2.0/umd/react-dom.production.min',
		'babel': 'https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.26.0/babel.min',
		'jsx': 'jsx'
	}
});

require(['jsx!Root']);