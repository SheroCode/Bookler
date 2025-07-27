import { useSelector } from "react-redux";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import MyBookingCad from "../../components/MyBookingCard/MyBookingCad";

function MyBookingPage() {
  const { bookings } = useSelector((state) => state.booking);

  if (!bookings.length) {
    return <p className="text-center text-gray-500 mt-10">No bookings yet.</p>;
  }

  return (
<>
    <HeaderBar title="My Bookings" />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">




      {bookings.map((booking) => (
        <MyBookingCad key={booking.hotel.id } booking={booking} />
      ))}
    </div>
    </>
  );
}

export default MyBookingPage;
