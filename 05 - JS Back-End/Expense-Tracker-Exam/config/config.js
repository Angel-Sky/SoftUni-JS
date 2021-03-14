const TABLE_NAME = 'expense-tracker';
const config = {
    PORT: 3000,
    DB_CONNECTION: `mongodb://localhost/${TABLE_NAME}`,
    SECRET: 'badumts',
    SALT: 5,
    COOKIE_NAME: 'USER_SESSION'
}

module.exports = config;