/*
 * @Author: your name
 * @Date: 2020-03-03 21:29:42
 * @LastEditTime: 2020-03-03 22:24:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack_test/webpack.config.js
 */
const path = require('path');

module.exports = {
  entry: './src/index.js', // 入口
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist') //resolve拼接路径
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [  //从右到左，从下往上执行，先执行css-loaders(解析css资源)，再执行style-loader(把css从js里面抽离出来放入style标签里面，插入到页面中的<head></head>标签里面)
          'style-loader', 
          'css-loader'
        ] 
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  }
};