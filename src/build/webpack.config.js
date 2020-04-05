const path = require('path');

module.exports = () => {
    console.log(__dirname)
    return {
        mode: "none",
        entry: "./app/index.js",
        output: {
            path: path.resolve(__dirname, "../.."),
            filename: "[name].bundle.js"
        },
        module: {
            rules: [
                { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
            ]
        }
    }
}
