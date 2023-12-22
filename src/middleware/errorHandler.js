const { CustomAPIError } = require('./../utils/customError');

const errorHandler = (error, req, res, next) => {
  if (error instanceof CustomAPIError) {
    return res.status(error.statusCode).json({
      success: false,
      message: error.message,
    });
  }

  res.status(500).json({
    success: false,
    message: 'Something went wrong, please try again!',
  });
};

module.exports = errorHandler;
