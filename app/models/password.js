/*
 * @Author: kuangxj 
 * @Email: frankxjkuang@gmail.com 
 * @Date: 2018-08-14 16:01:38 
 * @Last Modified by: kaungxj
 * @Last Modified time: 2018-08-15 10:36:40
 * @Description: password collection
 */

const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const PasswordSchema = new Schema({
  userId: {
    type: String,
    unique: true,
    required: true
  },
  hash: {
    type: String,
    required: true
  }
}, { collection: 'password', versionKey: false});

module.exports = mongoose.model('password', PasswordSchema);
