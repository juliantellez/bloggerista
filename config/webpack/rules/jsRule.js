const jsRules = {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: {
        loader: "ts-loader",
    }
};

module.exports = jsRules;