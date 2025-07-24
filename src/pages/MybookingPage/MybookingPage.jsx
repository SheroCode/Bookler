import { useSelector } from "react-redux";

function MyBookingPage() {
  const { bookings } = useSelector((state) => state.booking);

  if (!bookings.length) {
    return <p className='text-center text-gray-500 mt-10'>No bookings yet.</p>;
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6'>
      {bookings.map((booking, index) => (
        <div key={index} className='border rounded-xl shadow p-4'>
          <img
            src={booking.hotel.images?.main}
            alt={booking.hotel.name}
            className='rounded-md w-full h-48 object-cover mb-3'
          />
          <h3 className='text-lg font-bold'>{booking.hotel.name}</h3>
          <p className='text-sm text-gray-600 mb-1'>{booking.hotel.address?.city}</p>
          <p className='text-sm text-gray-500 truncate'>
            {booking.hotel.description}
          </p>
          <p className='mt-2 text-sm'>
            From: {new Date(booking.fromDate).toLocaleDateString()}
          </p>
          <p className='text-sm'>To: {new Date(booking.toDate).toLocaleDateString()}</p>
          <p className='text-sm'>Nights: {booking.totalDays}</p>
          <p className='font-semibold text-blue-600'>
            Total: ${booking.totalPrice}
          </p>
        </div>
      ))}
    </div>
  );
}

export default MyBookingPage;
