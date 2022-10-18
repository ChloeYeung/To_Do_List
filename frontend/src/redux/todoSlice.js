import { createSlice } from "@reduxjs/toolkit";
import { getAxioInstance } from "../utils/globalAxios"

const initialState = {
  todo: [],
  showtodo: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    getTodo: (state, action) => {
      state.todo = action.payload;
    },

    showTodo: (state, action) => {
      console.log("action", action)
      state.showtodo = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getTodo, showTodo } = todoSlice.actions;

export default todoSlice.reducer;

export const todoThunk = () => async (dispatch) => {
  const axios = getAxioInstance()
  const response = await axios.get('/todo')
  dispatch(getTodo(response.data.todo));
};

export const showtodoThunk = () => async (dispatch) => {
  const axios = getAxioInstance()
  const response = await axios.get('/todo')
  console.log("respond from show")
  console.log(response.data.data)
  console.log("===================")
  dispatch(showTodo(response.data.data));
};

export const addtodoThunk =
  (dto) =>
    async (dispatch) => {
      console.log(dto);
      const { name } = dto
      const axios = getAxioInstance()
      const res = await axios.post('/todo', {
        name
      })
      console.log("respond from add")
      console.log(res.data)
      console.log("===================")
      const newTodoList = await axios.get('/todo')
      let todoList = [...newTodoList.data.data]
      dispatch(showTodo(todoList));

      document.getElementById("addBox").value = "";
    };

export const deletetodoThunk =
  ({ id }) =>
    async () => {
      const axios = getAxioInstance()
      await axios.delete(`/todo/${id}`)
    };

export const edittodoThunk =
  ({ id, edit }) =>
    async (dispatch) => {
      const axios = getAxioInstance()

      await axios.patch(`/todo/${id}`, {
        edit,
      });
      const newTodoList = await axios.get('/todo')
      let todoList = [...newTodoList.data.data]
      dispatch(showTodo(todoList));
    };