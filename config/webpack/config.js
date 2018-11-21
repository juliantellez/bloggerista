// import path from 'path'
const path = require("path");

const INPUT = path.resolve(__dirname, "../../src/main.ts");
const OUTPUT = path.resolve(__dirname, "../../public");

const rules = require('./rules')

const config = {
    mode: "production",
    entry: INPUT,
    output: {
        path: OUTPUT,
        filename: "[name].[chunkhash].js"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
        rules
    }
};

module.exports = config;