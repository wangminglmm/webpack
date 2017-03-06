var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	entry:{
		main: './src/script/main.js',
		a: './src/script/a.js',
		b: './src/script/b.js',
		c: './src/script/c.js'
	},
	output: {
		path: './dist',
		filename: 'js/[name].js',
		publicPath: 'http:wangminglmm.com'
	},
	plugins: [
		new htmlWebpackPlugin({
			filename: 'a.html',
			template: 'index-v3.html',
			title: '我是a页面',
			inject: false,
			chunks:['a','main']
		}),
		new htmlWebpackPlugin({
			template: 'index-v3.html',
			filename: 'b.html',
			title: '我是b页面',
			inject: false,
			excludeChunks: ['a','c']
		}),
		new htmlWebpackPlugin({
			template: 'index-v3.html',
			filename: 'c.html',
			title: '我是c页面的测试',
			inject: false,
			excludeChunks: ['a','b']
		})
	]
}
