import { createSlice } from "@reduxjs/toolkit";

// Retrieve saved bookings from localStorage, or use an empty array if none exist
const savedBookings = JSON.parse(localStorage.getItem("bookings")) || [];

// Define the initial state for the booking slice
const initialState = {
  bookings: savedBookings,
};

// Create the booking slice with Redux Toolkit
const bookingSlice = createSlice({
  name: "booking", // Name of the slice
  initialState, // Initial state
  reducers: {
    // Reducer to add a new booking
    addBooking: (state, action) => {
      state.bookings.push(action.payload); // Add the new booking to the state

      // Persist the updated bookings array to localStorage
      localStorage.setItem("bookings", JSON.stringify(state.bookings));
    },
  },
});

// Export the addBooking action creator
export const { addBooking } = bookingSlice.actions;
// Export the reducer to be used in the store
export default bookingSlice.reducer;
