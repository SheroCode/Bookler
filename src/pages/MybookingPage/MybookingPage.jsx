import { useSelector } from "react-redux";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import MyBookingCard from "../../components/MyBookingCard/MyBookingCard";
import ProfileCard from "../../components/ProfileCard/ProfileCard";

function MyBookingPage() {
  const { bookings } = useSelector((state) => state.booking);

  if (!bookings.length) {
    return <p className='text-center text-gray-500 mt-10'>No bookings yet.</p>;
  }

  return (
    <>
      <HeaderBar title='My Bookings' />
      <div className='flex flex-wrap justify-between'>
        <div className=' w-7/12'>
          {bookings.map((booking) => (
            <MyBookingCard key={booking.hotel.id} booking={booking} />
          ))}
        </div>

        <div className='w-3/12'>
          <ProfileCard  />
        </div>
      </div>
    </>
  );
}

export default MyBookingPage;
