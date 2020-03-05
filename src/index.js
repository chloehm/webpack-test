/*
 * @Author: your name
 * @Date: 2020-03-03 22:48:11
 * @LastEditTime: 2020-03-04 23:08:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack_test/src/index.js
 */
// import _ from 'lodash';
// import printMe from './print.js';
// import './style.css';
import { cube } from './math.js';
const files = require.context(__dirname, true, /\.js$/)  //在项目中直接用require.context，在webpack中使用的时候要下载require-context依赖
console.log(files.keys())
var entry = {};
files.keys().map(item=>{
    name = item.replace(/(\.\/|\.js$)/g, '');
   entry[name] = './src/'+item.replace(/\.\//g, '');;
  //  entry[item.replace('.js', '')] = './src/' + item
  // entry[item.replace(/.js$/, '')] = './src/' + item
  //  entry[item.substr(0, item.length - 3)] = './src/' + item
})

console.log('entry:',entry)
// console.log('env......',process.env.NODE_ENV)
// console.log('env......',process.env.NODE_ENV1)
// setTimeout(function(){
//   // console.log('env......',process.env.__proto__)
//   console.log('env......',process)
// },1000)

  function component() {
    // console.log(a)
    // var element = document.createElement('div');
    var element = document.createElement('div');
    // var btn = document.createElement('button');

    // element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    // btn.innerHTML = 'Click me and check the console!';
    // btn.onclick = printMe;

    element.innerHTML = ['Hello webpack!','5 cubed is equal to '+cube(5)].join('\n\n');
    // element.appendChild(btn);

    return element;
  }

  // document.body.appendChild(component());
  var element  = component(); // 当print.js改变导致页面重新渲染时，重新获取渲染的元素
  document.body.appendChild(element);


  if(module.hot) {
    module.hot.accept('./print.js',function(){
      console.log('Accept the updated printMe module。。。。。')
      // printMe();
      document.body.remove(element);
      element = component(); //重新渲染时，componet 更新click时间处理；
      document.body.appendChild(element); 
    })
  }