/*
 * @Author: kuangxj 
 * @Email: frankxjkuang@gmail.com 
 * @Date: 2018-08-20 14:51:10 
 * @Last Modified by: kaungxj
 * @Last Modified time: 2018-08-24 23:40:44
 * @Description: school collection 
 */

const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const SchoolSchema = new Schema({
  id: {
    type: String,
    unique: true,
    require: true
  },
  name: {
    type: String,
    require: true
  },
  website: {
    type: String
  },
  provinceId: {
    type: String
  },
  level: {
    type: String
  },
  abbreviation: {
    type: String
  },
  city: {
    type: String
  },
}, { collection: 'universities', versionKey: false});

module.exports = mongoose.model('universities', SchoolSchema);

