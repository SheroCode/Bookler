import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import bookingReducer from "./bookingSlice";
export const store = configureStore({
  reducer: {
    use: userReducer,
    booking: bookingReducer,
  },
});
