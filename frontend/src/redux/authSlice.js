import { createSlice } from "@reduxjs/toolkit";
import { getAxioInstance, updateAxioInstance } from "../utils/globalAxios"

const initialState = {
  isAuthenticated: false || localStorage.getItem("TOKEN") != null,
  username: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.isAuthenticated = false;
    },
    getUsername: (state, action) => {
      state.username = action.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const { login, logout, getUsername } = authSlice.actions;

export default authSlice.reducer;

export const signupThunk =
  ({ username, password }) =>
    async () => {
      const axios = getAxioInstance()
      await axios.post(`/auth/signup`, {
        username,
        password,
      });
    };

export const loginThunk =
  ({ username, password }) =>
    async (dispatch) => {
      const axios = getAxioInstance()
      let response = await axios.post(
        `/auth/login`,
        { username, password }
      );
      if (response.data) {
        let token = response.data.data
        localStorage.setItem("TOKEN", token);
        updateAxioInstance(token)
        getUsername(username);
        dispatch(login());
      }
    };

export const logoutThunk = () => async (dispatch) => {
  localStorage.removeItem("TOKEN");
  updateAxioInstance()
  dispatch(logout());
};
