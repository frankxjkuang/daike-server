/*
 * @Author: kuangxj 
 * @Email: frankxjkuang@gmail.com 
 * @Date: 2018-08-14 16:03:32 
 * @Last Modified by: kaungxj
 * @Last Modified time: 2018-08-14 16:04:01
 * @Description: password bcrypt & validate
 */


// https://www.npmjs.com/package/bcrypt
const bcrypt = require('bcrypt');

const encrypt = async (password, saltTimes) => {
  const hash = await bcrypt.hash(password, saltTimes);
  return hash; 
};

const validate = async (password, hash) => {
  const match = await bcrypt.compare(password, hash);
  return match;
};

module.exports = {
  encrypt,
  validate
}
