const webpack = require('webpack');
const path = require('path');

let examples = ['one', 'two', 'three', 'four'];

let configTemplate = function(number, index) {
	return {
		entry: {
			entry: `./src/example_${number}`
		},
		output: {
			path: path.resolve(__dirname, `./dist/example_${number}`),
			filename: '[name].chunk.js'
		},
		plugins: [
			new webpack.optimize.CommonsChunkPlugin({
				name: 'inline',
				filename: 'webpack.bootstrap.chunk.js',
				minChunks: Infinity
			})
		]
	};
}













module.exports = examples.map(configTemplate);

