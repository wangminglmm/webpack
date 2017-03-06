var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
module.exports = {
	entry: {
		app: './src/app.js'
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "js/[name]-bundle.js",
		publicPath: ''
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: [path.resolve(__dirname,'node_modules')],
				query: {
					presets: ['latest']
				}
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader',
					},
					{
						loader: 'postcss-loader',
						options: {
							plugins: function(){
								return [
									require('autoprefixer')({broswer:['last 2 broswer','Firefox 15']})
								]
							}
						}
					}
				]
			},
			{
				test: /\.less$/,
				use:[
					'style-loader',
					{
						loader: 'css-loader?importLoaders=1'
					},
					{
						loader: 'postcss-loader',
						options: {
							plugins: function(){
								return [
									require('autoprefixer')({broswer:['last 2 broswer','Firefox 15']})
								]
							}
						}
					},
					'less-loader'
				]
			},
			{
				test: /\.html$/,
				use:[
					'html-loader'
				]
			},
			{
				test: /\.tpl$/,
				use:[
					'ejs-loader'
				]
			},
			{
				test: /\.(png|gif|svg|jpe?g)/i,
				use:[
					{
						loader: 'url-loader',
						query:{
							name:'dist/assets/[name]-[hash:5].[ext]',
							limit:10000
						}
					},
					{
						loader: 'image-webpack-loader',
//						query:{
//    						progressive: true,
//					        optimizationLevel: 7,
//					        interlaced: false,
//					        pngquant: {
//					        quality: '65-90',
//					        speed: 4
//						}
					}
				]
			}
		]
	},
	plugins: [
		new htmlWebpackPlugin({
			filename: 'index1.html',
			template: 'index.html',
			title: 'index1',
			inject: 'body',
			chunks: ['app']
		}),
		new htmlWebpackPlugin({
			filename: 'index2.html',
			template: 'index.html',
			title: 'index1',
			inject: 'body',
			excludeChunks: ['app']
		})
	]
}
