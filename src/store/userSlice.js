import { createSlice } from "@reduxjs/toolkit";

// Load user from localStorage on initial app load
const storedUser = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: storedUser || null,     // user info like name, email, etc.
  loggedIn: !!storedUser,     // boolean: true if user exists
};

const userSlice = createSlice({
  name: "use",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.loggedIn = true;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.user = null;
      state.loggedIn = false;
      localStorage.removeItem("user");
    },
    setUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
  },
});

export const { login, logout, setUser } = userSlice.actions;
export default userSlice.reducer;
