function MyBookingCard({ booking }) {
  return (
    <div className='bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row'>
      {/* Left: Hotel Image */}
      <div className='md:w-1/3 w-full'>
        <img
          src={booking.hotel.image}
          alt={booking.hotel.name}
          className='w-full h-full object-cover'
        />
      </div>

      {/* Right: Hotel Info */}
      <div className='p-4 md:w-2/3 w-full flex flex-col justify-between'>
        <div>
          <div className='flex justify-between items-start flex-wrap'>
            <h2 className='text-lg font-bold text-gray-800'>
              {booking.hotel.name}
              <span className='block text-sm font-medium text-gray-600'>
                {booking.hotel.address?.city}, {booking.hotel.address?.country}
              </span>
            </h2>

            <span className='bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded'>
               {booking.hotel.rating.score || "4.9"} ★
            </span>
          
          </div>

          <p className='text-sm text-gray-500 mt-1 truncate'>
            {booking.hotel.description}
          </p>
          
        </div>

        {/* Price and Date Info */}
        <div className='mt-4 flex justify-between items-end flex-wrap text-sm'>
          <div>
            <p>
              <span className='text-orange-500 font-semibold'>25% off</span>{" "}
              <span className='text-black font-bold text-lg'>
                 ${booking.totalPrice}
              </span>
            </p>
          </div>

          <div className='text-gray-600 flex'>
            <p className="me-2">
              <strong>From:</strong>{" "}
              {new Date(booking.fromDate).toLocaleDateString()}
            </p>
            <span> | </span>
            <p className="ms-2">
              <strong>To:</strong>{" "}
              {new Date(booking.toDate).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyBookingCard;
