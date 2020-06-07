const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	configureWebpack: {
		plugins: [
			new HtmlWebpackPlugin({
				title: 'Kill The Werewolf'
			})
		]
	}
}