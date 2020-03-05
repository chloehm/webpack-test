/*
 * @Author: your name
 * @Date: 2020-03-04 20:44:17
 * @LastEditTime: 2020-03-04 21:01:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack_test/webpack.dev.js
 */
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'eval',
  mode: 'development',
  devServer: {
    contentBase: './dist'
  }
});