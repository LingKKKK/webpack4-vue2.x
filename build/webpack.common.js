const path = require('path');
const webpack = require('webpack');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PostStylus = require('poststylus');

const plugins = [
	new VueLoaderPlugin(), // vue加载器
	new webpack.BannerPlugin(`xs build at ${Date.now()}`), // 打包后在.js/.css页头的时间
	new HtmlWebpackPlugin({
		template: path.join(__dirname, '../src/views/index.html'), // 引入模版
		// favicon: path.join(__dirname, '../src/assets/icon/favicon.ico'),
		filename: 'index.html',
		minify: { // 对index.html压缩
			collapseWhitespace: true, // 去掉index.html的空格
			removeAttributeQuotes: true, // 去掉引号
		},
		hash: true, // 去掉上次浏览器的缓存<使浏览器每次获取到的是最新的html> 因为有哈希值,这一步无所谓
	}),
	new MiniCssExtractPlugin({ // 分离css
		filename: '[name].[hash:8].css',
		allChunks: true
	}),
	new webpack.LoaderOptionsPlugin({
		options: {
			stylus: {
				use: [
					PostStylus(['autoprefixer']),
				]
			},
			babel: {
				presets: ['es2015'],
				plugins: ['transform-runtime']
			}
		}
	}),
	new webpack.ProvidePlugin({ // 三方库
		$http: 'axios',
		$: 'jquery',
		jQuery: 'jquery',
		'window.jQuery': 'jquery',
		'window.$': 'jquery',
	})
];

const files = fs.readdirSync(path.resolve(__dirname, '../dll'));
files.forEach(file => {
	if (/.*\.dll.js/.test(file)) {
		plugins.push(new AddAssetHtmlWebpackPlugin({
			filepath: path.resolve(__dirname, '../dll', file)
		}))
	}
	if (/.*\.manifest.json/.test(file)) {
		plugins.push(new webpack.DllReferencePlugin({
			manifest: path.resolve(__dirname, '../dll', file)
		}))
	}
})

module.exports = {
	entry: {
		main: './src/js/main.js',
		// 支持多文件入口
		// list: './src/list.js',
		// detail: './src/detail.js',
		vendor: ['axios']
	},
	resolve: {
		extensions: ['.js', '.vue', '.styl'], // import引入文件的时候不用加后缀
		modules: [ // 配置路径别名
			'node_modules',
			path.resolve(__dirname, 'src/js/components'),
			path.resolve(__dirname, 'src/assets')
		],
		alias: {
			'vue$': 'vue/dist/vue.min.js'
		}
	},
	module: {
		rules: [{
			test: require.resolve('jquery'),
			use: [{
				loader: 'expose-loader',
				options: 'jQuery'
			}, {
				loader: 'expose-loader',
				options: '$'
			}]
		}, {
			test: /\.js?$/,
			// include: path.resolve(__dirname, '../src'),
			// 可以使用 include/exclude 规定被解析的文件目录
			exclude: /node_modules/,
			loader: 'babel-loader',
		}, {
			test: /\.vue$/,
			loader: 'vue-loader'
		}, {
			test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
			use: {
				loader: 'url-loader',
				options: {
					name: '[name]_[hash].[ext]',
					outputPath: 'images/',
					limit: 10240
				}
			}
		}, {
			test: /\.(eot|ttf|svg)$/,
			use: {
				loader: 'file-loader'
			}
		}, {
			test: /\.html$/,
			use: [{
				loader: 'html-loader',
				options: { // 配置html中图片编译
					minimize: true
				}
			}]
		}, {
			test: /\.css$/,
			use: [
				'style-loader',
				'css-loader',
				'postcss-loader'
			],
		}, {
			test: /\.less$/,
			use: [
				'style-loader',
				{
					loader: 'css-loader',
					options: {
						importLoaders: 2
					}
				},
				'less-loader',
				'postcss-loader'
			]
		}, {
			test: /\.scss$/,
			use: [
				'style-loader',
				{
					loader: 'css-loader',
					options: {
						importLoaders: 2
					}
				},
				'sass-loader',
				'postcss-loader'
			]
		}]
	},
	plugins,
	optimization: {
		splitChunks: {
			cacheGroups: { // 这里开始设置缓存的 chunks
				vendor: { // key 为entry中定义的 入口名称
					chunks: 'all', //  all 任意 async 异步 initial 同步
					test: /node_modules/,
					name: 'vendor',
					minChunks: 1,
					enforce: true
				},
				styles: {
					chunks: 'all',
					test: /\.(css|styl)$/,
					name: 'vendor',
					minChunks: 1,
					enforce: true
				}
			}
		}
	},
	performance: false, // 资源过大是否警告 ?
}
