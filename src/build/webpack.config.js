const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const webpack = require('webpack');

module.exports = env => {
    return {
        mode: env.NODE_ENV || "none",
        entry: "./app/index.js",
        
        module: {
            rules: [
                { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
                { test: /\.pug$/, exclude: /node_modules/, loader: "pug-loader" }
            ]
        },
        plugins: [
            new webpack.ProgressPlugin(),
            new CompressionPlugin({filename: '[name][ext]',}),
            new HtmlWebpackPlugin({ template: './app/views/index.pug' })
        ],
        externals: {
            "react": "React",
            "react-dom" : "ReactDOM",
            "whatwg-fetch": "fetch"
        },
        output: {
            path: path.resolve(__dirname, "../.."),
            filename: "[name].bundle.js"
        },
        devServer: {
            port: 9000
        }
    }
}
