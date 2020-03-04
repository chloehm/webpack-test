/*
 * @Author: your name
 * @Date: 2020-03-04 17:03:28
 * @LastEditTime: 2020-03-04 17:08:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack_test/dev-server.js
 */
const webpackDevServer = require('webpack-dev-server');
const wepack = require('webpack');

const config = require('webpack.config.js');
const options = {
  contentBase: './dist',
  hot: true,  
  host: 'localhost'
}

webpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const server = new webpackDevServer(compiler,options);

server.listen(5000, 'localhsot',()=>{
  console.log('dev server listening on port 5000');
})