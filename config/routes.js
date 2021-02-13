const {Router} = require('express');
const router = Router();

const {userController, homeController, errorController, courseController} = require('../controllers');

router.use('/', homeController);
router.use('/users', userController);
router.use('/courses', courseController);
router.use('*', errorController);

module.exports = router;
