/*
 * @Author: kuangxj 
 * @Email: frankxjkuang@gmail.com 
 * @Date: 2018-08-17 16:42:42 
 * @Last Modified by: kaungxj
 * @Last Modified time: 2018-08-22 17:35:59
 * @Description: course collection
 */

const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const CourseSchema = new Schema({
  id: {
    type: String,
    unique: true,
    required: true
  },
  status: {
    type: String
  },
  publisher: {
    type: String,
    required: true
  },
  publisherHeader: {
    type: String
  },
  publisherName: {
    type: String
  },
  studentId: {
    type: String
  },
  schoolId: {
    required: true,
    type: String
  },
  school: {
    type: String
  },
  phone: {
    type: String
  },
  publishTime: {
    type: String
  },
  closeTime: {
    type: String
  },
  remark: {
    type: String
  },
  receiver: {
    type: String
  },
  receiverName: {
    type: String
  },
  province: {
    type: Number
  },
  college: {
    type: String
  },
  major: {
    type: String
  },
  courseName: {
    type: String
  },
  courseTime: {
    required: true,
    type: String
  },
  courseClass: {
    type: String
  },
  coursePlace: {
    required: true,
    type: String
  },
  reward: {
    type: Number
  },
  hasName: {
    type: Boolean
  },
  hasStuId: {
    type: Boolean
  },
  hasPhone: {
    type: Boolean
  },
  hasReward: {
    type: Boolean
  }
}, { collection: 'courses', versionKey: false});

module.exports = mongoose.model('courses', CourseSchema);
