module.exports = {
    constants: {
        USERNAME_MIN_LENGTH: 5,
        PASSWORD_MIN_LENGTH: 5,
        USERNAME_REGEX: /^[A-Za-z0-9]+$/,
        PASSWORD_REGEX: /^[A-Za-z0-9]+$/,
        TITLE_MIN_LENGTH: 4,
        DESCRIPTION_MIN_LENGTH: 20,
        IMAGE_URL_REGEX: /^https?/,
        DURATION_REGEX: /^[0-9]+$/,
        MOST_POPULAR_COURSES : 3,
    },
    msg: {
        USERNAME_MIN_LENGTH: "Username must be at least 5 characters",
        PASSWORD_MIN_LENGTH: "Password must be at least 5 characters",
        USERNAME_ONLY_ALPHABETICAL: "Username must contains only digits and/or latin letters",
        CONFIRMATION_PASSWORD_ERROR: "Your password and confirmation password do not match",
        PASSWORD_ONLY_ALPHABETICAL: "Password must contains only digits and/or latin letters",
        WRONG_CREDENTIALS: "Wrong username and/or password",
        USERNAME_IS_IN_USE: (username) => {
            return `Username ${username} is already taken ...`
        },
        DB_CONNECTED: (host, name) => {
            return `Successfully connected to ${host} : db -> ${name}`
        },
        DB_CONNECTION_ERROR: "Connection error: ",
        APPLICATION_RUNNING: (port) => {
            return `Application is up & listening on port ${port} ...`;
        },
        TITLE_MIN_LENGTH: `Title must be at least 4 characters`,
        DESCRIPTION_MIN_LENGTH: `Description must be at least 20 characters`,
        IMAGE_URL_INVALID: "ImageUrl must start with http or https",
        DURATION_ONLY_DIGITS: "Duration must contains only digits",
    }
}
