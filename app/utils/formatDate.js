/*
 * @Author: kuangxj 
 * @Email: frankxjkuang@gmail.com 
 * @Date: 2018-08-22 11:20:39 
 * @Last Modified by:   kaungxj 
 * @Last Modified time: 2018-08-22 11:20:39 
 * @Description: formatDate 
 */

const formatDate = date => {
  var y = date.getFullYear();
  var m = date.getMonth() + 1;
  m = m < 10 ? "0" + m : m;
  var d = date.getDate();
  d = d < 10 ? "0" + d : d;
  var h = date.getHours();
  h = h < 10 ? "0" + h : h;
  var minute = date.getMinutes();
  minute = minute < 10 ? "0" + minute : minute;
  var second = date.getSeconds();
  second = second < 10 ? "0" + second : second;
  return y + "-" + m + "-" + d + " " + h + ":" + minute + ":" + second;
}

module.exports = formatDate;