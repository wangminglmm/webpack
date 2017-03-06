var htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
//	entry可以是字符串，数组和对象；
//	entry: ['./src/script/main.js','./src/script/a.js'],
	entry:{
		'main': './src/script/main.js',
		'a': './src/script/a.js'
	},
	output: {
		path: './dist',
		filename: 'js/[name]-[chunkhash].js',
		//publicPath占位符用于上线时候的地址
		publicPath: 'http://wangminglmm.com'
	},
	//使用html-webpack-plugin插件
	plugins:[
		new htmlWebpackPlugin({
//			filename: 'index-[hash].html',
			filename:  'index-v2.html',
			template: 'index-v1.html',
//			inject: 'body'false,
			inject: false,
			title: 'webpack is goodv1',
			data: new Date(),
			//html压缩
			minify:{
				removeComments: true,
				collapseWhitespace: true
			}
		})
	]
}
