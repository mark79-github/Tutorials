const {Router} = require('express');
const {courseService} = require('../services');
const {isCreator, isLogged, validate} = require('../middlewares');

const router = Router();

router.get('/', (req, res, next) => {
    courseService.getAll()
        .then((courses) => {
            res.render('home/home', {courses});
        })
        .catch(next);
});

router.post('/', (req, res, next) => {
    courseService.getAll(req.body)
        .then((courses) => {
            res.render('home/home', {courses});
        })
        .catch(next);
});

router.post('/', isLogged, (req, res, next) => {
    courseService.getAll(req.body)
        .then((courses) => {
            res.render('home/home', {courses});
        })
        .catch(next);
});

router.get('/create', isLogged, (req, res) => {
    res.render('courses/create');
});

router.post('/create', isLogged, validate.course.create, (req, res, next) => {
    courseService.create(req.user.id, req.body)
        .then(() => {
            res.redirect('/');
        })
        .catch(next);
});

router.get('/details/:courseId', isLogged, isCreator, (req, res, next) => {
    courseService.getById(req.params.courseId)
        .then((course) => {
            res.render('courses/details', {...course});
        })
        .catch(next);
});

router.get('/edit/:courseId', isLogged, (req, res, next) => {
    courseService.getById(req.params.courseId)
        .then(course => {
            res.render('courses/edit', {...course});
        }).catch(next);
});

router.post('/edit/:courseId', isLogged, validate.course.edit, (req, res, next) => {
    courseService.edit(req.params.courseId, req.body)
        .then((course) => {
            res.redirect(`/courses/details/${course._id}`);
        })
        .catch(next);
});

router.get('/delete/:courseId', isLogged, (req, res, next) => {
    courseService.remove(req.params.courseId)
        .then(() => {
            res.redirect('/');
        }).catch(next);
});

router.get('/enroll/:courseId', isLogged, (req, res, next) => {
    courseService.enroll(req.params.courseId, req.user.id)
        .then(([course]) => {
            res.redirect(`/courses/details/${course._id}`);
        })
        .catch(next);
});

module.exports = router;
