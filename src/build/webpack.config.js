const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
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
            new HtmlWebpackPlugin({ template: './app/views/index.pug' }),
            new FaviconsWebpackPlugin({
                logo: './app/assets/favicon.png',
                outputPath: './',
                prefix: '',
                favicons: {
                    icons: {
                        android: false,              // Create Android homescreen icon. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
                        appleIcon: false,            // Create Apple touch icons. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
                        appleStartup: false,         // Create Apple startup images. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
                        coast: false,                // Create Opera Coast icon. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
                        favicons: true,             // Create regular favicons. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
                        firefox: false,              // Create Firefox OS icons. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
                        windows: false,              // Create Windows 8 tile icons. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
                        yandex: false                // Create Yandex browser icon. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
                    }
                }
            })
        ],
        externals: {
            "react": "React",
            "react-dom": "ReactDOM",
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
