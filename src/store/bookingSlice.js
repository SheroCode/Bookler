import { createSlice } from "@reduxjs/toolkit";

const savedBookings = JSON.parse(localStorage.getItem("bookings")) || [];

const initialState = {
  bookings: savedBookings,
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    addBooking: (state, action) => {
      const { hotel, fromDate, toDate } = action.payload;

      const hotelIdentifier = hotel.id || hotel.name;

      const isAlreadyBooked = state.bookings.some(
        (b) =>
          (b.hotel.id || b.hotel.name) === hotelIdentifier &&
          b.fromDate === fromDate &&
          b.toDate === toDate
      );

      if (!isAlreadyBooked) {
        state.bookings.push(action.payload);
        localStorage.setItem("bookings", JSON.stringify(state.bookings));
      }
    },
  },
});

export const { addBooking } = bookingSlice.actions;
export default bookingSlice.reducer;