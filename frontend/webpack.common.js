module.exports = {
    entry: {
        main: "./src/index.jsx",
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /[\\/]node_modules[\\/]/,
                loader: "babel-loader",
                options: { presets: ["@babel/env"] }
            },
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: "media"
                    }
                }
            }
        ]
    }
};
