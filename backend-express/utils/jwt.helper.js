const jwt = require('jsonwebtoken');
function getJWTPayload(userId, userName) {
    return {
        userId,
        userName
    }
}
function generateJWTToken(userId, userName) {
    const payload = getJWTPayload(userId, userName)
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '7d' });
}
function verifyJWTToken(token) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err) {
                reject(err)
            }
            resolve(user)
        })
        reject("unknown")
    });
}


module.exports = {
    generateJWTToken,
    verifyJWTToken
}