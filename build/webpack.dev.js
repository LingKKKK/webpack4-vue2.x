const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const CopyWebpackPlugin = require('copy-webpack-plugin')

const devConfig = {
	mode: 'development',
	devtool: 'cheap-module-eval-source-map',
	devServer: {
		// 设置在哪个目录下启动server, 以及一些基本配置
		contentBase: path.join(__dirname, '../static'),
		compress: true,
		host: 'localhost',
		port: 9001,
		open: true, // 自动打开浏览器 ?
		hot: true, // 热加载 ?
		hotOnly: true // 模块热替换 ?
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new CopyWebpackPlugin([ // 在static启动项目, 很多静态资源都在static中
			{
				from: path.resolve(__dirname, '../static'),
				to: 'static',
				ignore: ['.*']
			}
		])
	],
	output: {
		path: path.resolve(__dirname, '../dist'),
		publicPath: '/',
		filename: 'main.js',
		chunkFilename: "[id].main-[hash:8].js"
	}
}

module.exports = merge(commonConfig, devConfig);
