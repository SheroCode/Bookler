import React from "react";

function MyBookingCard({ booking }) {
  return (
    <>
      <div key={booking.hotel.id} className='bg-white rounded-xl shadow p-4'>
        <img
          src={booking.hotel.image}
          alt={booking.hotel.name}
          className='rounded-md w-full h-48 object-cover mb-3'
        />
        <h3 className='text-lg font-bold'>{booking.hotel.name}</h3>
        <p className='text-sm text-gray-600 mb-1'>
          {booking.hotel.address?.city}
        </p>
        <p className='text-sm text-gray-500 truncate'>
          {booking.hotel.description}
        </p>
        <p className='mt-2 text-sm'>
          From: {new Date(booking.fromDate).toLocaleDateString()}
        </p>
        <p className='text-sm'>
          To: {new Date(booking.toDate).toLocaleDateString()}
        </p>
        <p className='text-sm'>Nights: {booking.totalDays}</p>
        <p className='font-semibold text-blue-600'>
          Total: ${booking.totalPrice}
        </p>
      </div>
    </>
  );
}

export default MyBookingCard;
