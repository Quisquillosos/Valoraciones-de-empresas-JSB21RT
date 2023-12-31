// Final driver function to be used in the error middleware
const errorController = (err, req, res, next) => {
    res.status(err.httpStatus || 500).send({
        status: 'error',
        message: err.message,
    });
};

module.exports = errorController;
