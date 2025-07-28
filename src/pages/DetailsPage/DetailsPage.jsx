import { Spinner } from "flowbite-react";
import { lazy, Suspense, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../../Network/interceptor";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import HotelDetailsCard from "../../components/HotelDetailsCard/HotelDetailsCard";
// Lazy loading
const RecommendedCard = lazy(() =>
  import("../../components/RecommendedCard/RecommendedCard")
);
function DetailsPage() {
  let { id } = useParams();
  console.log(id);
  const [hotelDetails, setHotelDetails] = useState({});
  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const res = await axiosInstance.get(`/hotels/${id}`);
        console.log(res.data);
        setHotelDetails(res.data);
      } catch (err) {
        console.error("Error fetching hotels:", err);
      }
    };
    fetchHotels();
  }, [id]);
  return (
    <>
      <HeaderBar title={"Hotel Details"} />
      
      <HotelDetailsCard hotelDetails={hotelDetails} />

      <h2 className='text-2xl font-bold py-3 mt-15'>Recommended Hotels</h2>
      <Suspense
        fallback={
          <Spinner/>
        }>
        <div className='flex flex-wrap gap-5 justify-center'>
          <RecommendedCard />
        </div>
      </Suspense>
    </>
  );
}

export default DetailsPage;
