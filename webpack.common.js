/*
 * @Author: your name
 * @Date: 2020-03-04 20:44:02
 * @LastEditTime: 2020-03-04 23:28:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack_test/webpack.common.js
 */
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const requireContext = require('require-context')
const webpack = require('webpack')
const files = requireContext(__dirname+'/src', true, /\.js$/)
console.log()
var entry = {};
files.keys().map(item=>{
    name = item.replace(/(\.\/|\.js)/g, '');
   entry[name] = './src/'+item;
  //  entry[item.replace('.js', '')] = './src/' + item
  // entry[item.replace(/.js$/, '')] = './src/' + item
  //  entry[item.substr(0, item.length - 3)] = './src/' + item
})

// let entry = {}
// files.keys().map(item => {
//     entry[item.substr(0, item.length - 3)] = './src/' + item
// })

console.log(entry)
module.exports = {
  // entry: {
  //   app: './src/index.js'
  // },
  entry: entry,
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Production'
    }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'common' // 指定公共 bundle 的名称。
    // })
    // config.optimization.splitChunks()
    
  ],
  // optimization: {
    // splitChunks: {
    //   // chunks: 'all',
    //   chunks (chunk) {
    //     // exclude `my-excluded-chunk`
    //     return chunk.name !== 'my-excluded-chunk';
    //   }
    // },
    optimization: {
      splitChunks: {
        chunks: 'all',
        // minSize: 30000,
        // // minRemainingSize: 0,
        // maxSize: 0,
        minChunks: 1,
        // maxAsyncRequests: 6,
        // maxInitialRequests: 4,
        // automaticNameDelimiter: '~',
        // automaticNameMaxLength: 30,
        // cacheGroups: {
        //   defaultVendors: {
        //     test: /[\\/]node_modules[\\/]/,
        //     priority: -10
        //   },
        //   default: {
        //     minChunks: 2,
        //     priority: -20,
        //     reuseExistingChunk: true
        //   }
        // }
      }
    // }
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: '[name].bundle.js',
  }
};