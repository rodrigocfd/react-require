'use strict';

// Based on:
// https://github.com/mikach/requirejs-babel
// https://gist.github.com/kenichi-odo/9fd4c1ee114082302df3f502c3b4bac1

var fetchText, _buildMap = {};

if (typeof window !== 'undefined' &&
		window.navigator &&
		window.document) {
	fetchText = function(url, callback) {
		var xhr = new XMLHttpRequest();
		xhr.open('GET', url, true);
		xhr.onreadystatechange = function (evt) {
			// Do not explicitly handle errors, those should be
			// visible via console output in the browser.
			if (xhr.readyState === 4) {
				callback(xhr.responseText);
			}
		};
		xhr.send(null);
	};
} else if (typeof process !== 'undefined' &&
		process.versions &&
		!!process.versions.node) {
	// Using special require.nodeRequire, something added by r.js.
	fs = require.nodeRequire('fs');
	fetchText = function(path, callback) {
		callback(fs.readFileSync(path, 'utf8'));
	};
}

define(['babel'], function(Babel) {
	return {
		load: function(name, req, onload, config) {
			function applyOptions(options) {
				var defaults = {
					modules: 'amd',
					sourceMap: config.isBuild ? false : 'inline',
					sourceFileName: name + '.js'
				};
				for (var key in options) {
					if (options.hasOwnProperty(key)) {
						defaults[key] = options[key];
					}
				}
				return defaults;
			}
			var url = req.toUrl(name + '.js');

			fetchText(url, function(text) {
				var code = Babel.transform(text, {
					presets: ['es2015', 'react'],
					filename: 'embedded',
					sourceMaps: 'inline'
				}).code;

				if (config.isBuild) {
					_buildMap[name] = code;
				}

				onload.fromText(code);
			});
		},

		write: function(pluginName, moduleName, write) {
			if (moduleName in _buildMap) {
				write.asModule(pluginName + '!' + moduleName,
					_buildMap[moduleName]);
			}
		}
	}
});