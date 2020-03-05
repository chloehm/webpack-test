/*
 * @Author: your name
 * @Date: 2020-03-04 22:28:48
 * @LastEditTime: 2020-03-04 22:29:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack_test/src/new/index.js
 */
const files = require.context(__dirname, true, /\.js$/)  //在项目中直接用require.context，在webpack中使用的时候要下载require-context依赖
console.log(files.keys())