/*
 * @Author: your name
 * @Date: 2020-03-04 15:49:06
 * @LastEditTime: 2020-03-04 16:35:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack_test/server.js
 */
const express = require('express');
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware');


const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);


//Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

// Serve the files on port 4002.
app.listen(4002, function(){
  console.log('webpack app listening port 4002!\n')
})