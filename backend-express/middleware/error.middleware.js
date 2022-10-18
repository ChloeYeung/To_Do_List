// https://expressjs.com/en/guide/error-handling.html
const responseHandler = require("../utils/responseFormat")
function logErrors(err, req, res, next) {
    console.log("error log")
    console.error(err.stack)
    next(err)
}

function clientErrorHandler(err, req, res, next) {
    if (req.xhr) {
        responseHandler({
            res,
            code:500,
            errorMessage:'Something failed!' 
        })
        // res.status(500).send({ error: 'Something failed!' })
    } else {
        next(err)
    }
}

function errorHandler(err, req, res, next) {
    responseHandler({
        res,
        code:500,
        errorMessage:err.message
    })
}

module.exports = {
    logErrors,
    errorHandler,
    clientErrorHandler
}