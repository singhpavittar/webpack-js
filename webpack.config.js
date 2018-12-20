const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const webpack = require('webpack');
const webpackVisualizer = require('webpack-visualizer-plugin');

module.exports = {
    // ENABLE IT FOR DEVELOPMENT
    /* mode: 'development', */
    mode: 'production',
    entry: {
        app: "./src/index.js",
        another: "./src/print.js"
    },
    // ENABLE IT FOR DEVELOPMENT
    /* devtool: 'inline-source-map', */
    devServer: {
        contentBase: './dist',
        hot: true
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    plugins: [
        new ManifestPlugin(),
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({title: 'Output Management'}),
        new webpack.HotModuleReplacementPlugin(),
        new webpackVisualizer()
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
            minSize: 30000,
            maxSize: 0,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            name: true,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }, {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            }
        ]
    }
}