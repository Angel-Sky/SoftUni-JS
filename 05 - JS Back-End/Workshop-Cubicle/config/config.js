const config = {
    development: {
        //port: process.env.PORT || 3000
        PORT: 5000,
    },
    production: {
        PORT: 80,
    }
};

module.exports = config[process.env.NODE_ENV.trim()]