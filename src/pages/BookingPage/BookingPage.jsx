// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import BookingFormCard from "../../components/BookingFormCard/BookingFormCard";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import SummaryCard from "../../components/SummaryCard/SummaryCard";

function BookingPage() {
  // const { loggedIn } = useSelector((state) => state.use);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (!loggedIn) {
  //     navigate("/login");
  //   }
  // }, [loggedIn, navigate]);

  return (
    <>
      <HeaderBar />
      <div className='flex flex-wrap my-5 px-4 gap-6'>
        <div className='w-full lg:w-3/4'>
          <BookingFormCard />
        </div>
        <div className='w-full lg:w-1/4'>
          <SummaryCard />
        </div>
      </div>
    </>
  );
}

export default BookingPage;
