const path = require("path");
const webpack = require("webpack");

module.exports = {
    mode: "development",
    entry: {
        app: "./src/app.js"
    },
    output: {
        filename: "[name].js",
        path: path.resolve("public/js")
    }
}