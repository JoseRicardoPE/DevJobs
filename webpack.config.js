const path = require("path");

module.exports = {
    mode: "development",
    entry: {
        skill: "./helpers/skills.js"
    },
    output: {
        filename: "[name].js",
        path: path.resolve("public/js")
    }
}