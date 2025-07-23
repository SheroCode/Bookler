import { lazy, Suspense, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../../Network/interceptor";
import HotelDetailsCard from "../../components/HotelDetailsCard/HotelDetailsCard";
import { TbTruckLoading } from "react-icons/tb";
// Lazy loading
const RecommendedCard = lazy(() =>
  import("../../components/RecommendedCard/RecommendedCard")
);function DetailsPage() {
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
      <HotelDetailsCard hotelDetails={hotelDetails} />

         <h2 className='text-2xl font-bold py-3 '>Recommended Hotels</h2>
            <Suspense
              fallback={
                <div className='flex  items-center'>
                  {" "}
                  <TbTruckLoading className='font-bold text-2xl' />
                  <h3 className='font-bold text-2xl'> Loading ...</h3>
                </div>
              }>
              <div className='flex flex-wrap gap-5 justify-center'>
                <RecommendedCard />
              </div>
            </Suspense>
    </>
  );
}

export default DetailsPage;
