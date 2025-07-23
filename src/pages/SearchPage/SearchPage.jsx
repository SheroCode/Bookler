import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../Network/interceptor";
import HotelCard from "../../components/HotelCard/HotelCard";
import HeaderBar from "../../components/HeaderBar/HeaderBar";

function SearchPage() {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const res = await axiosInstance.get("/hotels");
        setHotels(res.data);
        console.log(res.data);
      } catch (err) {
        console.error("Error fetching hotels:", err);
      }
    };

    fetchHotels();
  }, []);

  return (
    <>
      <HeaderBar />
      <div className='px-4 py-6'>
        <h2 className='text-2xl font-bold text-center mb-6 '>
          Available Hotels
        </h2>
        <div className='flex flex-wrap gap-1'>
          {hotels.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </div>
      </div>
    </>
  );
}

export default SearchPage;
