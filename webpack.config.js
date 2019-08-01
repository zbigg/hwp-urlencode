const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    context: __dirname,
    entry: {
        "app+foo": "./index.js",
    },
    plugins: [
        new HtmlWebpackPlugin()
    ]
}
