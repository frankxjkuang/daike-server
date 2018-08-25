/*
 * @Author: kuangxj 
 * @Email: frankxjkuang@gmail.com 
 * @Date: 2018-08-17 17:35:45 
 * @Last Modified by: kaungxj
 * @Last Modified time: 2018-08-25 10:59:19
 * @Description: course router 
 */

const Router = require('koa-router');
const router = new Router();
const course_controller = require('./../../app/controllers/course_controller');

router.post('/course', course_controller.getCourse);
router.post('/publish', course_controller.publishCourse);
router.post('/substitute', course_controller.substituteCourse);
router.post('/collect', course_controller.collectCourse);
router.post('/course/type', course_controller.getCourseByType);

module.exports = router;