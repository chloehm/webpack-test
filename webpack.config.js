/*
 * @Author: your name
 * @Date: 2020-03-03 21:29:42
 * @LastEditTime: 2020-03-04 18:57:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack_test/webpack.config.js
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  // entry: './src/index.js', // 入口
  entry: {
    app:'./src/index.js',
    // print: './src/print.js'
  },
  mode: "production",
  devtool: 'inline-source-map',//inline-source-map把源码映射插入到行内，source-map单独生成问题 
        //有inline将源码映射嵌入到源码js中,否则单独生成一个map文件
        //带cheap的只展示哪一行报错，不会具体到某一列
  devServer: { //该配置告知 webpack-dev-server，在 localhost:8080 下建立服务，将 dist 目录下的文件，作为可访问文件。
    contentBase: './dist',
    hot: true
    // compress: true, //是否启用gzip压缩
    // port: 9000
  },
  module: {
    rules: [{ 
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }]
  },
  output: {
    // filename: '[name].bunlde.js',
    filename: 'bunlde.js',
    path: path.resolve(__dirname, 'dist'), //resolve拼接路径
    // publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '哈哈哈',
    }),
    new CleanWebpackPlugin(), //默认output里面的path
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ]
};