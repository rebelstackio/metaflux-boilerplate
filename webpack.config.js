const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	entry: './src/main/index.js',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'main.js'
	},
	devServer: {
		contentBase: path.resolve(__dirname, 'public')
	},
	module: {
		rules: [
			{
				test: /\.(js)$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
				include: [
					/\/node_modules\/@rebelstack-io\/metaflux/
				]
			},
			{
				test: /\.css$/,
				use: [ 'style-loader', 'css-loader' ]
			}
		]
	},
	resolve: {
		extensions: ['*', '.js'],
		modules: ['node_modules', 'src']
	},
	node: {
		fs: 'empty'
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'public/index.html'),
			hash: false,
			filename: 'index.html',
			inject: 'body'
		})
		//, new CopyWebpackPlugin([
		// 	{ from: 'public/css', to: 'css' },
		// 	{ from: 'public/fonts', to: 'fonts' },
		// 	{ from: 'public/js', to: 'js' },
		// 	{ from: 'public/images', to: 'images' },
		// 	{ from: 'public/manifest.json', to: '.' },
		// ])
	],
	devtool: 'source-map'
};
