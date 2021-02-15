const config = {
    development: {
        PORT: 5000,
        SALT_ROUNDS: 10,
        DB_CONNECTION: 'mongodb://localhost/cubicle',
        SECRET: 'badumts',
        COOKIE_NAME: 'USER_SESSION'
    },
    production: {
        PORT: 80,
        SALT_ROUNDS: 10,
        DB_CONNECTION: '',
        SECRET: 'badumts',
        COOKIE_NAME: 'USER_SESSION'
    }
};

module.exports = config[process.env.NODE_ENV.trim()]