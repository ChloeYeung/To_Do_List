var express = require('express');
var router = express.Router();
const isDefined = require('../utils/isDefined')
const responseHandler = require("../utils/responseFormat")
const { getTodoList, addTodoItem } = require("../service/todo.service")
/* GET users listing. */
router.get('/', async function (req, res) {
  try {
    const list = await getTodoList(req.user.id)
    return responseHandler({ res, data: [...list] ?? [], code: 200 })
  } catch (error) {
    return responseHandler({ res, errorMessage: error.message })
  }
});

router.post('/', async function (req, res) {
  const { list:item } = req.body;
  if (!isDefined(item)) {
    return responseHandler({ res, code: 400 })
  }
  try {
    const newTodoItem = await addTodoItem(req.user.id, item)
    return responseHandler({ res, code: 200, data:newTodoItem })
  } catch (error) {
    return responseHandler({ res, errorMessage: error.message })
  }
});

module.exports = router;
