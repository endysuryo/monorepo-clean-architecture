const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const devMode = process.env.NODE_ENV !== "production"

module.exports = {
    mode: devMode ? "development" : "production",
    entry: {
        index: { import: "./index.tsx" }
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.css$/i,
                use: [
                    devMode ? "style-loader" : MiniCssExtractPlugin.loader,
                    'css-loader',
                    "postcss-loader",
                ],
            },
        ],
    },
    output: {
        filename: "components.bundle.min.js",
        library: 'fstrComponents',
        libraryTarget: 'umd',
        clean: true
    },
    plugins: [].concat(devMode ? [] : [new MiniCssExtractPlugin()]),
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
}