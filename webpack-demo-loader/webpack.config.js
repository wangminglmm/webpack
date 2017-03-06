var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
module.exports = {
	entry: './src/app.js',
	output: {
		path: './dist',
		filename: 'js/[name]-bundle.js',
		publicPath: ''
	},
	module: {
		rules: [
			{// cnpm install --save-dev babel-loader babel-core
				test: /\.js$/,
				loader: 'babel-loader',
//				exclude: './node_modules/',//应该是绝对路径，可以是数组
//				include: './src/',
				exclude: [path.resolve(__dirname,'node_modules')],
				include: [path.resolve(__dirname,'src')],
				query: {
					// cnpm install --save-dev babel-preset-latest
					presets: ['latest']
				}
				
			},
			{
				test: /\.css$/,
				use: [
					{loader: 'style-loader'},
					{//?importLoaders=1对于import导入的css没有办法加前缀，可采取新建postcss.config.js或者导入less
						loader: 'css-loader'
					},
					{
						loader: 'postcss-loader',
						options:{
							plugins: [require('autoprefixer')({broswer:['last 5 broswer','Firefox 15']})]
						}
					}
				]
			},
			{
				test: /\.less$/,
//				loader: "style-loader!css-loader!less-loader"  这样没法经过postcss-loader
				use: [
					{loader: 'style-loader'},
					{//?import导入的less和scss会加上前缀前缀
						loader: 'css-loader'
					},
					{
						loader: 'postcss-loader',
						options:{
							plugins: [require('autoprefixer')({broswer:['last 5 broswer','Firefox 15']})]
						}
					},
					{
						loader: 'less-loader'
					}
				]
			},
			{
				test: /\.scss$/,
				use: [
					{loader: 'style-loader'},
					{loader: 'css-loader'},
					{//这里是需要的，让postcss处理编译好的css
						loader: 'postcss-loader',
						options:{
							plugins: [require('autoprefixer')({broswer:['last 5 broswer','Firefox 15']})]
						}
					},
					{loader: 'sass-loader'}
				]
			},
			{
				test: /\.html$/,
				use: [
					{loader: 'html-loader'}
				]
			},
			{
				test: /\.tpl$/,
				use: [
					{loader: 'ejs-loader'}
				]
			},
			{
				test: /\.(png|gif|svg|jpe?g)/i,
//				loader: 'file-loader',
//				'url-loader',//把图片装成base64编码
				loaders: [
					{
						loader: 'url-loader',
						query: {
							name:'assets/[name]-[hash:5].[ext]',
							limit: 20000// 20k以下会转成base64
						}
					},
					{
						loader: 'image-webpack-loader'
//						query: {
//				          progressive: true,
//				          optimizationLevel: 7,
//				          interlaced: false,
//				          pngquant: {
//				            quality: '65-90',
//				            speed: 4
//				          }
//				        }
					}
				]
			}
		]
	},
	plugins: [
		new htmlWebpackPlugin({
			filename: 'index.html',
			template: 'index.html',
			inject: 'body'
		})
	]
}
