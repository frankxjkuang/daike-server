/*
 * @Author: kuangxj 
 * @Email: frankxjkuang@gmail.com 
 * @Date: 2018-08-14 16:02:09 
 * @Last Modified by: kaungxj
 * @Last Modified time: 2018-08-24 22:21:51
 * @Description: config file 
 */

module.exports = {
  port: 3000, // 项目启动的端口
  db: 'mongodb://localhost:27017/dai-ke', // 数据库
  saltTimes: 3 // 加盐的次数（用户密码加密）
}