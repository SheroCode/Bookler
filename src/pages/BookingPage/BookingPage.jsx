import { useLocation } from "react-router-dom";
import BookingFormCard from "../../components/BookingFormCard/BookingFormCard";
import SummaryCard from "../../components/SummaryCard/SummaryCard";
import HeaderBar from "../../components/HeaderBar/HeaderBar";

function BookingPage() {
  const { state } = useLocation();
  const hotel = state?.hotel;

  if (!hotel) return <p>No hotel selected</p>;

  return (
    <>
      <HeaderBar />
      <div className='flex flex-wrap my-5 px-4 gap-6'>
        <div className='w-full lg:w-3/4'>
          <BookingFormCard hotel={hotel} />
        </div>
        <div className='w-full lg:w-1/4'>
          <SummaryCard hotel={hotel} />
        </div>
      </div>
    </>
  );
}

export default BookingPage;
