function responseHandler({
    code = 500,
    data = null,
    errorMessage = null,
    message = null,
    res //express res
}) {
    const defaultRes = {
        code: code,
        data,
        errorMessage,
        message
    }
    res.status(code).send(defaultRes)
}


module.exports = responseHandler