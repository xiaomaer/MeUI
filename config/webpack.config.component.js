const webpack = require('webpack');
const path = require('path');
const HappyPack = require('happypack');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const os = require('os');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // 将样式文件抽离成一个文件
const happyThreadPool = HappyPack.ThreadPool({
    size: os.cpus().length
});
const Components = require('../components.json');

module.exports = {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    entry: Components,
    output: {
        path: path.resolve(process.cwd(), './lib'),
        filename: '[name]/index.js',
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                loader: 'eslint-loader',
                enforce: 'pre',
                exclude: /node_modules/
            },
            {
                test: /\.(ts|js)x?$/,
                use: 'happypack/loader?id=babel',
                exclude: /node_modules/
            },
            {
                oneOf: [
                    {
                        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                        loader: 'url-loader',
                        options: {
                            limit: 10000, // 小于10k，图片格式为base64
                            name: 'static/image/[name].[hash:8].[ext]'
                        }
                    },
                    {
                        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            name: 'static/media/[name].[hash:8].[ext]'
                        }
                    },
                    {
                        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            name: 'static/font/[name].[hash:8].[ext]'
                        }
                    },
                    {
                        exclude: [/\.(ts|js)x?$/, /\.html$/, /\.json$/, /\.(css|scss|less)/],
                        loader: 'file-loader',
                        options: {
                            name: 'static/media/[name].[hash:8].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                include: /node_modules/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1 // 0 => 无 loader(默认); 1 => postcss-loader; 2 => postcss-loader, sass-loader
                        }
                    },
                    'postcss-loader'
                ]
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2 // 0 => 无 loader(默认); 1 => postcss-loader; 2 => postcss-loader, sass-loader
                        }
                    },
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.less$/,
                // exclude: /node_modules/, // antd动态引入，需要支持less解析
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2 // 0 => 无 loader(默认); 1 => postcss-loader; 2 => postcss-loader, sass-loader
                        }
                    },
                    'postcss-loader',
                    { loader: 'less-loader', options: { javascriptEnabled: true } }
                ]
            }
        ]
    },
    plugins: [
        // Makes some environment variables available to the JS code, for example:
        // It is absolutely essential that NODE_ENV was set to production here.
        // Otherwise React will be compiled in the very slow development mode.
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development')
            }
        }),
        new MiniCssExtractPlugin({
            filename: '[name]/index.css'
        }),
        // 以进度条的形式反馈打包进度
        new ProgressBarPlugin(),
        new HappyPack({
            id: 'babel',
            threadPool: happyThreadPool,
            loaders: ['cache-loader', 'babel-loader'],
            verbose: true // 允许 HappyPack 输出日志
        }),
    ]
};
