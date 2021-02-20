const errorHandler = (err, req, res, next) => {
    let status = err.status || 500;
    let message = err.message || 'Somehing went wrong!';

}