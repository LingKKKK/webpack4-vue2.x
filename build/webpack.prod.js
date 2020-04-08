const path = require('path');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const prodConfig = {
	mode: 'production',
	devtool: 'cheap-module-source-map',
	plugins: [
		// 清空dist目录
		new CleanWebpackPlugin([path.join(__dirname, '../dist')]),
	],
	output: {
		// 将文件打包到dist中
		path: path.resolve(__dirname, '../dist'),
		publicPath: './',
		filename: 'main.js',
		chunkFilename: "[id].main-[hash:8].js"
	}
}

module.exports = merge(commonConfig, prodConfig);
