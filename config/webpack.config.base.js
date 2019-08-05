const path = require('path');
const HappyPack = require('happypack');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const os = require('os');

const __ROOT = path.resolve(__dirname, '../'); // 根目录;
const __SRC = path.resolve(__ROOT, 'examples');


const happyThreadPool = HappyPack.ThreadPool({
    size: os.cpus().length
});

module.exports = {
    entry: {
        index: './examples/index'
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.jsx'],
        alias: {
            '@packages': path.resolve(__ROOT, 'packages/'),
            '@examples': path.resolve(__ROOT, 'examples/'),
        },
        modules: [__SRC, 'node_modules']
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                loader: 'eslint-loader',
                enforce: 'pre',
                // include: __SRC,
                exclude: /node_modules/
            },
            {
                test: /\.(ts|js)x?$/,
                use: 'happypack/loader?id=babel',
                // include: __SRC,
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
            }
        ]
    },
    plugins: [
        // 清空文dist件夹
        new CleanWebpackPlugin({
            verbose: true, // 开启在控制台输出信息
            dry: false // 启用删除文件
        }),
         // 以进度条的形式反馈打包进度
         new ProgressBarPlugin(),
        // Generates an `index.html` file with the <script> injected.
        new HtmlWebpackPlugin({
            template: path.resolve('public/index.html'),
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                removeScriptTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true
            }
        }),
        new HappyPack({
            id: 'babel',
            threadPool: happyThreadPool,
            loaders: ['cache-loader', 'babel-loader'],
            verbose: true // 允许 HappyPack 输出日志
        }),
    ]
};
