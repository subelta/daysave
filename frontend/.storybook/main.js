const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
	addons: ['@storybook/preset-typescript'],
	stories: ['../src/**/*.stories.[tj]sx'],

	webpackFinal: async (config, { configType }) => {
		return {
			...config,
			module: {
				...config.module,
				rules: [
					{
						test: /\.(ts|tsx)$/,
						exclude: /[\\/]node_modules[\\/]/,
						loader: 'ts-loader'
					},
					{
						test: /\.(js|jsx)$/,
						exclude: /[\\/]node_modules[\\/]/,
						use: [
							'source-map-loader',
							{
								loader: 'babel-loader',
								options: { presets: ['@babel/env'] }
							}
						],
					},
					{
						test: /\.html$/,
						use: ['html-loader']
					},
					{
						test: /\.(svg|png|jpg|gif)$/,
						use: {
							loader: 'file-loader',
							options: {
								name: '[name].[hash].[ext]',
								outputPath: 'media'
							}
						}
					},
					{
						test: /\.css$/,
						use: [
							configType === 'DEVELOPMENT' ? 'style-loader' : MiniCssExtractPlugin.loader,
							'css-loader',
						],
						exclude: /\.module\.css$/
					},
					{
						test: /\.module\.css$/,
						use: [
							configType === 'DEVELOPMENT' ? 'style-loader' : MiniCssExtractPlugin.loader,
							{
								loader: 'css-loader',
								options: {
									modules: {
										localIdentName: '[name]__[local]___[hash:base64:5]'
									},
								},
							},
						],
					},
				]
			},
			resolve: {
				alias: {
					StyleSettings: path.resolve(__dirname, '../src/components/App/styleSettings'),
					Utils: path.resolve(__dirname, '../src/utils'),
				},
				extensions: ['.js', '.jsx', '.ts', '.tsx', 'json'],
			}
		}
	},
};
