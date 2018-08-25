/*
 * @Author: kuangxj 
 * @Email: frankxjkuang@gmail.com 
 * @Date: 2018-08-20 14:55:28 
 * @Last Modified by: kaungxj
 * @Last Modified time: 2018-08-20 15:41:29
 * @Description: school api 
 */

const School_col = require('./../models/school');

const searchSchoolByName = async (ctx, next) => {
  const req = ctx.request.body;

  const schools = await School_col.find({
    name: new RegExp(req.schoolName)
  }, { _id: 0 }).limit(10);

  ctx.status = 200;
  if (schools) {
    ctx.body = {
      code: 1,
      data: schools
    }
  } else {
    ctx.body = {
      code: 0,
      msg: 'err'
    }
  }
}

module.exports = {
  searchSchoolByName
}