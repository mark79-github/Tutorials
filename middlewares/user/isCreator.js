const {courseService} = require('../../services');

module.exports = async (req, res, next) => {
    if (req.user) {
        courseService.getById(req.params.courseId)
            .then((course) => {
                res.locals.isCreator = course.creator._id.toString() === req.user.id.toString();
                res.locals.isEnrolled = course.usersEnrolled.some(value => {
                    return value._id.toString() === req.user.id.toString();
                })

            })
            .catch((error) => next(error));
    }

    next();
}