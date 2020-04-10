const path = require('path')

module.exports = {
    entry: {
        main: './src/index.tsx',
    },
    module: {
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
            }
        ]
    },
    resolve: {
        alias: {
            StyleSettings: path.resolve(__dirname, './src/components/App/styleSettings'),
            Utils: path.resolve(__dirname, './src/utils'),
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx', 'json'],
    },
}
