const jwt = require('jsonwebtoken');
const { verifyJWTToken } = require('../utils/jwt.helper');
async function authJWTMiddleware(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (token == null) {
        return res.sendStatus(401)
    }

    try {
        const result = await verifyJWTToken(token)
        req.user = result
        next()
    } catch (error) {
        return res.sendStatus(403)
    }
}

module.exports = authJWTMiddleware