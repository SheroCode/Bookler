import React from "react";

function SummaryCard({ hotel, fromDate, toDate, totalDays, totalPrice }) {
  const formatDate = (date) =>
    date ? new Date(date).toLocaleDateString() : "Not selected";

  const pricePerNight = hotel?.pricing?.[0]?.discountedPrice || 0;

  return (
    <div className='bg-white rounded-xl shadow p-4 w-full max-w-sm'>
      <h2 className='text-xl font-bold mb-4'>Summary</h2>

      <img
        src={hotel.images.main}
        alt='Hotel'
        className='rounded-md mb-4'
      />

      <div className='mb-2'>
        <p className='font-semibold'>{hotel.name}</p>
        <p className='text-sm text-gray-500'>
          {hotel.address.street}, {hotel.address.city}, {hotel.address.country}
        </p>
      </div>

      <div className='flex justify-between items-center mb-4'>
        <span className='text-red-600 font-semibold'>
          {hotel.pricing[0].discount}
        </span>
        <span className='text-2xl font-bold'>
          {pricePerNight}
          <span className='text-sm font-medium text-gray-500'>
            {hotel.pricing[0].currency}
          </span>
        </span>
      </div>

      <div className='text-sm text-gray-600 mb-2'>
        <p>
          <strong>Check In:</strong> {formatDate(fromDate)}
        </p>
        <p>
          <strong>Check Out:</strong> {formatDate(toDate)}
        </p>
      </div>

      <hr className='my-4' />

      <div className='text-sm text-gray-700 space-y-1'>
        <div className='flex justify-between'>
          <span>Price Per Night</span>
          <span>${pricePerNight}</span>
        </div>
        <div className='flex justify-between'>
          <span>Nights</span>
          <span>{totalDays || 0}</span>
        </div>
        <div className='flex justify-between font-bold text-black pt-2 border-t'>
          <span>Total Price</span>
          <span>${totalPrice || 0}</span>
        </div>
      </div>
    </div>
  );
}

export default SummaryCard;