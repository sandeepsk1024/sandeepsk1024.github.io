const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins

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
