import { useDispatch } from "react-redux";
import { addBooking } from "../../store/bookingSlice";
import { useRef } from "react";
import { differenceInDays } from "date-fns";

function PayNowButton({ hotel, fromDate, toDate }) {
  const dispatch = useDispatch();
  const hasBookedRef = useRef(false);

  const pricePerNight = hotel?.pricing?.[0]?.discountedPrice || 0;
  const totalDays = fromDate && toDate ? differenceInDays(toDate, fromDate) : 0;
  const totalPrice = totalDays > 0 ? totalDays * pricePerNight : 0;

  const handlePayNow = () => {
    if (!fromDate || !toDate || totalDays <= 0 || hasBookedRef.current) return;
    hasBookedRef.current = true;

    const bookingData = {
      hotel: {
        id: hotel.id,
        name: hotel.name,
        image: hotel.images.main,
        city: hotel.city,
        rating: hotel.rating,
        description: hotel.description,
        price: pricePerNight,
        address: hotel.address,
      },
      fromDate: fromDate.toISOString(),
      toDate: toDate.toISOString(),
      totalDays,
      totalPrice,
    };

    dispatch(addBooking(bookingData));
  };

  return (
    <button
      onClick={handlePayNow}
      className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition'>
      Pay Now
    </button>
  );
}

export default PayNowButton;