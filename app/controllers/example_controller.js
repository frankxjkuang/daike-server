/*
 * @Author: kuangxj 
 * @Email: frankxjkuang@gmail.com 
 * @Date: 2018-08-25 10:43:58 
 * @Last Modified by: kaungxj
 * @Last Modified time: 2018-08-25 11:07:04
 * @Description: example api 
 */

const Example_col = require('./../models/example');

const getExample = async (ctx, next) => {
  const req = ctx.request.query;

  const examples = await Example_col.find({}, { _id: 0 });

  ctx.status = 200;
  ctx.body = {
    msg: 'get request!!',
    data: {
      data: req,
      examples,
    }
  }
}

const postExample = async (ctx, next) => {
  const req = ctx.request.body;

  ctx.status = 200;
  if (!req.msg || typeof req.msg != 'string') {
    ctx.status = 401;
    ctx.body = {
      msg: 'post request!!',
      desc: `parameter error！！msg: ${req.msg}`,
      data: req
    }
    return;
  }

  const result = await Example_col.create({msg: req.msg});

  ctx.body = {
    msg: 'post request!!',
    desc: 'insert success!',
    data: result
  }
}

module.exports = {
  getExample,
  postExample
}