import { useLocation } from "react-router-dom";
import BookingFormCard from "../../components/BookingFormCard/BookingFormCard";
import SummaryCard from "../../components/SummaryCard/SummaryCard";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import { useState } from "react";
import { differenceInDays } from "date-fns";

function BookingPage() {
  const { state } = useLocation();
  const hotel = state?.hotel;

  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);

  const pricePerNight = hotel?.pricing?.[0]?.discountedPrice || 0;
  const totalDays = fromDate && toDate ? differenceInDays(toDate, fromDate) : 0;
  const totalPrice = totalDays > 0 ? totalDays * pricePerNight : 0;

  if (!hotel) return <p>No hotel selected</p>;

  return (
    <>
      <HeaderBar />
      <div className='flex flex-wrap my-5 px-4 gap-6'>
        <div className='w-full lg:w-8/12'>
          <BookingFormCard
            hotel={hotel}
            fromDate={fromDate}
            setFromDate={setFromDate}
            toDate={toDate}
            setToDate={setToDate}
            totalDays={totalDays}
            totalPrice={totalPrice}
          />
        </div>
        <div className='w-full lg:w-3/12'>
          <SummaryCard
            hotel={hotel}
            fromDate={fromDate}
            toDate={toDate}
            totalDays={totalDays}
            totalPrice={totalPrice}
          />
        </div>
      </div>
    </>
  );
}

export default BookingPage;
