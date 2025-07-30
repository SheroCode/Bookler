import { lazy, Suspense, useEffect, useState } from "react";
import { axiosInstance } from "../../Network/interceptor";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import { useSearchParams } from "react-router-dom";
import NoResult from "../NoResult/NoResult";
import { Spinner } from "flowbite-react";

const HotelCard = lazy(() => import("../../components/HotelCard/HotelCard"));

function SearchPage() {
  const [searchParams] = useSearchParams();
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFilteredHotels = async () => {
      setLoading(true);
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
        console.log("res", res)
        setHotels(res.data);
      } catch (err) {
        console.error("Error fetching hotels:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchFilteredHotels();
  }, [searchParams]);
  return (
    <>
      <HeaderBar title='Hotel | Total ' total={hotels.length} />
      <div className='min-h-[300px] flex justify-center items-center'>
        {loading ? (
          <Spinner />
        ) : hotels.length !== 0 ? (
          <Suspense fallback={<Spinner />}>
            <div className='flex flex-wrap justify-between gap-4'>
              {hotels.map((hotel) => (
                <HotelCard key={hotel.id} hotel={hotel} />
              ))}
            </div>
          </Suspense>
        ) : (
          <NoResult />
        )}
      </div>
    </>
  );
}

export default SearchPage;
