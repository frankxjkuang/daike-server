/*
 * @Author: kuangxj 
 * @Email: frankxjkuang@gmail.com 
 * @Date: 2018-08-25 10:58:51 
 * @Last Modified by: kaungxj
 * @Last Modified time: 2018-08-25 11:00:31
 * @Description: example router 
 */

const Router = require('koa-router');
const router = new Router();
const example_controller = require('./../../app/controllers/example_controller');

router.get('/example/get', example_controller.getExample);
router.post('/example/post', example_controller.postExample);

module.exports = router;