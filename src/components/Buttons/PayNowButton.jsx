import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { differenceInDays } from "date-fns";
import { addBooking } from "../../store/bookingSlice";

function PayNowButton({ hotel, fromDate, toDate, pricePerNight }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePayNow = () => {
    const totalDays = differenceInDays(toDate, fromDate);
    const totalPrice = totalDays * pricePerNight;

    const bookingData = {
      hotel,
      fromDate: fromDate.toISOString(),
      toDate: toDate.toISOString(),
      totalDays,
      totalPrice,
    };

    dispatch(addBooking(bookingData));
    navigate("/mybooking");
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
