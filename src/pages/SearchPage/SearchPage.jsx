import { useEffect, useState } from "react";
import { axiosInstance } from "../../Network/interceptor";
import HotelCard from "../../components/HotelCard/HotelCard";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import { useSearchParams } from "react-router-dom";
import NoResult from "../NoResult/NoResult";
function SearchPage() {
  const [searchParams] = useSearchParams();
  const [hotels, setHotels] = useState([]);
  useEffect(() => {
    const fetchFilteredHotels = async () => {
      const nameQuery = searchParams.get("q") || "";
      const countryCode = searchParams.get("country") || "";
      let url = "/hotels";
      if (nameQuery || countryCode) {
        const params = new URLSearchParams();
        if (nameQuery) params.append("q", nameQuery);
        if (countryCode) params.append("address.countryIsoCode", countryCode);
        url += `?${params.toString()}`;
      }
      try {
        const res = await axiosInstance.get(url);
        setHotels(res.data);
      } catch (err) {
        console.error("Error fetching hotels:", err);
      }
    };
    fetchFilteredHotels();
  }, [searchParams]);
  return (
    <>
      <HeaderBar title="Hotel | Total " total={ hotels.length  } />
      <div className='px-4 py-6'>
        {hotels.length === 0 ? (
          <NoResult />
        ) : (
          <div className='flex flex-wrap gap-1'>

            <div></div>
            {hotels.map((hotel) => (
              <HotelCard key={hotel.id} hotel={hotel} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
export default SearchPage;
