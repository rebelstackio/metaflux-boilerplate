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
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					// Creates `style` nodes from JS strings
					'style-loader',
					// Translates CSS into CommonJS
					'css-loader',
					// Compiles Sass to CSS
					'sass-loader',
				]
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: [
					'file-loader',
				]
			},
			{
				test: /\.(png|jp(e*)g|svg)$/,  
				use: [{
					loader: 'url-loader',
					options: { 
						limit: 8000, // Convert images < 8kb to base64 strings
						name: 'images/[hash]-[name].[ext]'
					}
				}]
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
