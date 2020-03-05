/*
 * @Author: your name
 * @Date: 2020-03-04 20:44:26
 * @LastEditTime: 2020-03-04 22:48:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack_test/webpack.prod.js
 */
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');
const webpack = require('webpack');
// console.log(__dirname)


module.exports = merge(common, {
  mode: 'production',
  devtool: 'eval',
  plugins: [
    // new UglifyJSPlugin({
    //   sourceMap: true
    // }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
      'process.env.NODE_ENV1': '"development"',
    })
  ]
});