const {Course, User} = require('../models');

function getById(courseId) {
    return Course.findById(courseId).lean();
}

function getAll(data) {
    if (data) {
        const {title} = data;
        let queryParams = {};
        queryParams.title = new RegExp(title, 'i');
        return Course.find({title: queryParams.title}).lean();
    } else {
        return Course.find({}).lean();
    }
}

async function create(userId, data) {
    const course = new Course(data);
    course.creator = await User.findById(userId);
    return course.save();
}

function edit(courseId, data) {
    return Course.findByIdAndUpdate(courseId, data);
}

function remove(courseId) {
    return Course.findByIdAndDelete(courseId);
}

function enroll(courseId, userId) {
    return Course.findById(courseId)
        .then((course) => {
            return Promise.all([course, User.findById(userId)]);
        }).then(([c, u]) => {
            c.usersEnrolled.push(u);
            u.enrolledCourses.push(c);
            return Promise.all([c.save(), u.save()])
        });
}

module.exports = {
    getById,
    getAll,
    create,
    edit,
    remove,
    enroll,
}
