const {constants, msg} = require('../../config/constants');

module.exports = {
    user: {
        register(req, res, next) {
            const {username, password, rePassword} = req.body;

            let user = {
                errors: [],
            };

            if (username.trim().length === 0 || username.trim().length < constants.USERNAME_MIN_LENGTH) {
                user.errors.push(msg.USERNAME_MIN_LENGTH);
            } else {
                user.username = username.trim();
            }

            if (!constants.USERNAME_REGEX.test(username.trim())) {
                user.errors.push(msg.USERNAME_ONLY_ALPHABETICAL);
                user.username = undefined;
            }

            if (password.trim().length === 0 || password.trim().length < constants.PASSWORD_MIN_LENGTH) {
                user.errors.push(msg.PASSWORD_MIN_LENGTH);
            }

            if (password.trim() !== rePassword.trim()) {
                user.errors.push(msg.CONFIRMATION_PASSWORD_ERROR);
            }

            if (!constants.PASSWORD_REGEX.test(password.trim())) {
                user.errors.push(msg.PASSWORD_ONLY_ALPHABETICAL);
            }

            if (!user.errors.length) {
                next();
                return;
            }
            res.render('users/register', {...user, message: user.errors.shift()});

        },
        login(req, res, next) {
            const {username, password} = req.body;

            let user = {
                errors: [],
            };

            if (username.trim().length === 0 || username.trim().length < constants.USERNAME_MIN_LENGTH) {
                user.errors.push(msg.USERNAME_MIN_LENGTH);
            } else {
                user.username = username.trim();
            }

            if (!constants.USERNAME_REGEX.test(username.trim())) {
                user.errors.push(msg.USERNAME_ONLY_ALPHABETICAL);
                user.username = undefined;
            }

            if (password.trim().length === 0 || password.trim().length < constants.PASSWORD_MIN_LENGTH) {
                user.errors.push(msg.PASSWORD_MIN_LENGTH);
            }

            if (!user.errors.length) {
                next();
                return;
            }
            res.render('users/login', {...user, message: user.errors.shift()})
        },
    },
    course: {
        create(req, res, next) {
            const {title, description, imageUrl, duration} = req.body;

            let course = {
                errors: [],
            };

            if (title.trim().length === 0 || title.trim().length < constants.TITLE_MIN_LENGTH) {
                course.errors.push(msg.TITLE_MIN_LENGTH);
            } else {
                course.title = title.trim();
            }

            if (description.trim().length === 0 || description.trim().length < constants.DESCRIPTION_MIN_LENGTH) {
                course.errors.push(msg.DESCRIPTION_MIN_LENGTH);
            } else {
                course.description = description.trim();
            }

            if (!constants.IMAGE_URL_REGEX.test(imageUrl.trim())) {
                course.errors.push(msg.IMAGE_URL_INVALID);
            } else {
                course.imageUrl = imageUrl.trim();
            }

            if (!constants.DURATION_REGEX.test(duration.trim())) {
                course.errors.push(msg.DURATION_ONLY_DIGITS);
            } else {
                course.duration = duration.trim();
            }

            if (!course.errors.length) {
                next();
                return;
            }
            res.render('courses/create', {...course, message: course.errors.shift()});

        },
        edit(req, res, next) {
            const {title, description, imageUrl, duration} = req.body;

            let course = {
                errors: [],
            };

            if (title.trim().length === 0 || title.trim().length < constants.TITLE_MIN_LENGTH) {
                course.errors.push(msg.TITLE_MIN_LENGTH);
            } else {
                course.title = title.trim();
            }

            if (description.trim().length === 0 || description.trim().length < constants.DESCRIPTION_MIN_LENGTH) {
                course.errors.push(msg.DESCRIPTION_MIN_LENGTH);
            } else {
                course.description = description.trim();
            }

            if (!constants.IMAGE_URL_REGEX.test(imageUrl.trim())) {
                course.errors.push(msg.IMAGE_URL_INVALID);
            } else {
                course.imageUrl = imageUrl.trim();
            }

            if (!constants.DURATION_REGEX.test(duration.trim())) {
                course.errors.push(msg.DURATION_ONLY_DIGITS);
            } else {
                course.duration = duration.trim();
            }

            if (!course.errors.length) {
                next();
                return;
            }
            res.render('courses/edit', {...course, message: course.errors.shift()});
        }
    }
}