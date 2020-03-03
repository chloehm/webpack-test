/*
 * @Author: your name
 * @Date: 2020-03-03 21:30:34
 * @LastEditTime: 2020-03-03 22:35:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack_test/src/index.js
 */
import _ from 'lodash';
import './style.css';
import Icon from './bg-login.png'
import Data from './data.json'
function component() {
  var element = document.createElement('div');
  console.log(Data)
  // Lodash, currently included via a script, is required for this line to work
  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');
  // 将图像添加到我们现有的 div。
  var myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());