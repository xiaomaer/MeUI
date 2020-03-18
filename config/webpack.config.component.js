const merge = require('webpack-merge');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // 将样式文件抽离成一个文件
const baseWebpackConfig = require('./webpack.config.base');
const Components = require('../components.json');

module.exports = merge(baseWebpackConfig, {
    entry: Components,
    externals : {
        react: 'react'
    },
    output: {
        path: path.resolve(process.cwd(), './packages'),
        filename: '[name]/lib/index.js',
        libraryTarget: 'umd'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name]/lib/index.css'
        })
    ]
});
