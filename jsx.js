/**
 * React with RequireJS
 * @author Rodrigo Cesar de Freitas Dias
 * @license MIT
 * @see https://github.com/rodrigocfd/react-requirejs
 */

'use strict';

(function() {
	var fetchText, _buildMap = {};

	if (typeof window !== 'undefined' &&
			window.navigator &&
			window.document) {
		fetchText = function(url, callback) {
			var xhr = new XMLHttpRequest();
			xhr.open('GET', url, true);
			xhr.onreadystatechange = function(evt) {
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
		var fs = require.nodeRequire('fs');
		fetchText = function(path, callback) {
			callback(fs.readFileSync(path, 'utf8'));
		};
	}

	define(['babel'], function(Babel) {
		return {
			load: function(name, req, onload, config) {
				var url = req.toUrl(name + '.js');

				// Default values for Babel presets and plugins.
				var babelPresets = (window.babelConfig && window.babelConfig.presets) ||
					['es2015', 'react'];
				var babelPlugins = (window.babelConfig && window.babelConfig.plugins) ||
					['transform-class-properties', 'transform-decorators-legacy'];

				fetchText(url, function(text) {
					var code = Babel.transform(text, {
						presets: babelPresets,
						plugins: babelPlugins,
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
})();