var express = require('express');
var router = express.Router();
const isDefined = require('../utils/isDefined')
const responseHandler = require("../utils/responseFormat")
const { getTodoList, addTodoItem, updateTodoItemById, deleteTodoItemById } = require("../service/todo.service")
/* GET users listing. */
router.get('/', async function (req, res) {
  try {
    const list = await getTodoList(req.user.userId)
    return responseHandler({ res, data: [...list] ?? [], code: 200 })
  } catch (error) {
    console.log("error", error)
    return responseHandler({ res, errorMessage: error.message })
  }
});

router.post('/', async function (req, res) {
  const { list:item } = req.body;
  if (!isDefined(item)) {
    return responseHandler({ res, code: 400 })
  }
  try {
    const newTodoItem = await addTodoItem(req.user.userId, item)
    return responseHandler({ res, code: 201, data:newTodoItem })
  } catch (error) {
    return responseHandler({ res, errorMessage: error.message })
  }
});

router.patch('/:id', async function (req, res) {
  const {id} = req.params
  const {edit} = req.body 
  if (!isDefined(edit)) {
    return responseHandler({ res, code: 400 })
  }
  try {
    const editdTodoItem = await updateTodoItemById(id, edit)
    return responseHandler({ res, code: 200, data:editdTodoItem })
  } catch (error) {
    return responseHandler({ res, errorMessage: error.message })
  }
});

router.delete('/:id', async function (req, res) {
  const {id} = req.params
  try {
    const deleted = await deleteTodoItemById(id)
    return responseHandler({ res, code: 200 })
  } catch (error) {
    return responseHandler({ res, errorMessage: error.message })
  }
});


module.exports = router;
