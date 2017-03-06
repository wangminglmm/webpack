var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	entry: {
		'a': './src/script/a.js',
		'b': './src/script/b.js',
		'c': './src/script/c.js',
		'main': './src/script/main.js'
	},
	output: {
		path: './dist',
		filename: 'js/[name].js'
	},
	plugins: [
		new htmlWebpackPlugin({
			filename: 'a.html',
			template: 'index-v2.html',
			title: '我是a页面',
			inject: 'body',
//			chunks: ['main','a'],
			excludeChunks: ['b','c']
		}),
		new htmlWebpackPlugin({
			filename: 'b.html',
			template: 'index-v2.html',
			title: '我是b页面',
			inject: 'body',
//			chunks: ['main','b'],
			excludeChunks: ['a','c']
		}),
		new htmlWebpackPlugin({
			filename: 'c.html',
			template: 'index-v2.html',
			title: '我是c页面',
			inject: 'body',
//			chunks: ['main','c']
			excludeChunks: ['a']
		}),
	]
}
