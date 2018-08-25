/*
 * @Author: kuangxj 
 * @Email: frankxjkuang@gmail.com 
 * @Date: 2018-08-25 10:34:57 
 * @Last Modified by: kaungxj
 * @Last Modified time: 2018-08-25 10:44:49
 * @Description: example collection 
 */

const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const exampleSchema = new Schema({
  msg: {
    type: String,
    required: true
  },
}, { collection: 'example', versionKey: false});

module.exports = mongoose.model('example', exampleSchema);