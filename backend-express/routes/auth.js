var express = require('express');
var router = express.Router();
const isDefined = require('../utils/isDefined')
const { generateJWTToken } = require('../utils/jwt.helper');
const responseHandler = require("../utils/responseFormat")
const { login, register } = require("../service/auth.service")
/* GET users listing. */
router.post('/login', async function (req, res) {
  const { username, password } = req.body;
  if (!isDefined(username) || !isDefined(password)) {
    return responseHandler({ res, code: 400 })
  }
  try {
    const user = await login(username, password)
    const token = await generateJWTToken(user.id, user.username)
    return responseHandler({ res, data: token, code: 200 })
  } catch (error) {
    return responseHandler({ res, errorMessage: error.message })
  }
});

router.post('/signup', async function (req, res) {
  const { username, password } = req.body;
  if (!isDefined(username) || !isDefined(password)) {
    return responseHandler({ res, code: 400 })
  }
  try {
    await register(username,password)
    return responseHandler({ res, code: 200 })
  } catch (error) {
    return responseHandler({ res, errorMessage: error.message })
  }
});

module.exports = router;
