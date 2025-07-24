// store/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

// localStorage
const storedUser = JSON.parse(localStorage.getItem("user"));

const userSlice = createSlice({
  name: "use",
  initialState: {
    user: storedUser || null,
    loggedIn: false,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload)); // حفظ عند التسجيل
    },
    login: (state) => {
      state.loggedIn = true;
    },
    logout: (state) => {
      state.user = null;
      state.loggedIn = false;
      localStorage.removeItem("user");
    },
  },
});

export const { setUser, login, logout } = userSlice.actions;
export default userSlice.reducer;
