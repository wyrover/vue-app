'use strict';

var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var vue = require('vue-loader');
var isProduction = function () {
    return process.env.NODE_ENV === 'production';
};

// webpack 插件
var plugins = [
    // 提取公用 js 到 common.js 文件中
    new webpack.optimize.CommonsChunkPlugin('common.js'),
    // 将样式统一发布到style.css
    new ExtractTextPlugin('style.css', {
        allChunks: true,
        disable: false
    }),
    new webpack.ProvidePlugin({
        $: 'webpack-zepto'
    })
];
var entry = ['./src/main'],
    cdnPrefix = '',
    buildPath = '/dist/',
    publishPath = cdnPrefix + buildPath;

if (isProduction()) {
    cdnPrefix = '';
    publishPath = cdnPrefix;
}
// 编译输出路径
module.exports = {
    debug: true,entry: './src/main.js',
    output: {
        path: './dist',
        publicPath: 'dist/',
        filename: 'build.js'
    },
    module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue'
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract(
                "style-loader", 'css-loader?sourceMap!sass-loader!cssnext-loader')
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract(
                "style-loader", "css-loader?sourceMap!cssnext-loader")
        }, {
            test: /\.js$/,
            exclude: /node_modules|vue\/dist/,
            loader: 'babel'
        }, {
            test: /\.(jpg|png|gif)$/,
            loader: "file-loader?name=images/[hash].[ext]"
        }, {
            test: /\.json$/,
            loader: 'json'
        }, {
            test: /\.(html|tpl)$/,
            loader: 'html-loader'
        }]
    },
    vue: {
        css: ExtractTextPlugin.extract('css'),
        sass: ExtractTextPlugin.extract('css!sass-loader')
    },
    babel: {
        presets: ['es2015', 'stage-0'],
        plugins: ['transform-runtime']
    },
    resolve: {
        extension: ['', '.js'],
        // 别名
        alias: {
            filter: path.join(__dirname, 'src/filters')
        }
    },
    plugins: plugins,
    devtool: '#source-map'
};