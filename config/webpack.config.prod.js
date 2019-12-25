const merge = require('webpack-merge');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // 将样式文件抽离成一个文件
const baseWebpackConfig = require('./webpack.config.base');

let prodConfig = merge(baseWebpackConfig, {
    entry: {
        index: './src/index'
    },
    output: {
        path: path.resolve(__dirname, '../lib'),
        filename: 'index.js',
        libraryTarget: 'umd'
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: 'index.css'
        })
    ]
});
if (process.env.NODE_ANALYZE) {
    // 打包模块分析
    const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
    // https://github.com/stephencookdev/speed-measure-webpack-plugin
    const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
    // 每阶段打包时间统计
    const smp = new SpeedMeasurePlugin();
    prodConfig.plugins.push(new BundleAnalyzerPlugin());
    prodConfig = smp.wrap(prodConfig);
}
module.exports = prodConfig;
