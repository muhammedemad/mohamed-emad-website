const path = require('path'),
common = require('./webpack.common'),
merge =  require('webpack-merge');

module.exports = merge(common, {
    mode: "development",
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    }
});