const path = require("path");
const webpack = require("webpack");

module.exports = {
    mode: "production",
    // mode: 'development',

    entry: path.resolve(__dirname, "src/index.js"),

    output: {
        filename: "stellar-base.js",
        path: path.resolve(__dirname, "./"),
        library: "StellarSdk",
        libraryTarget: "umd"
    },

    externals: ["react-native"],

    resolve: {
        alias: {
            crypto: path.resolve(__dirname, "src/crypto.js")
        }
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        cacheDirectory: true,
                        presets: ["module:metro-react-native-babel-preset"]
                    }
                }
            }
        ]
    },

    plugins: [new webpack.IgnorePlugin(/ed25519/)]
};
