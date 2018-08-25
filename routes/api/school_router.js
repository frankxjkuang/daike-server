/*
 * @Author: kuangxj 
 * @Email: frankxjkuang@gmail.com 
 * @Date: 2018-08-20 15:03:39 
 * @Last Modified by: kaungxj
 * @Last Modified time: 2018-08-25 10:59:25
 * @Description: school router 
 */

const Router = require('koa-router');
const router = new Router();
const school_controller = require('./../../app/controllers/school_controller');

router.post('/school', school_controller.searchSchoolByName);

module.exports = router;