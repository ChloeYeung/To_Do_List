function responseHandler({
    code = 500,
    data = null,
    errorMessage = null,
    res //express res
}) {
    const defaultRes = {
        code: code,
        data,
        errorMessage
    }
    res.status(code).send(defaultRes)
}


module.exports = responseHandler