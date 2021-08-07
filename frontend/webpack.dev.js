const common = require('./webpack.common')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin")

module.exports = merge.smart(common, {
    mode: 'development',
    output: {
        filename: '[name].bundle.js',
        path: undefined
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html'
        }),
        new CopyPlugin({
            patterns: [
                { from: "public", to: "" },
            ],
        }),
    ],
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader', // 2 - Inject styles into DOM
                    'css-loader', // 1 - Turns css into commonjs
                ],
                exclude: /\.module\.css$/
            },
            {
                test: /\.module\.css$/,
                use: [
                    'style-loader',
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
    }
})
