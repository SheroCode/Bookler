import { lazy, Suspense, useEffect, useState } from "react";
import { axiosInstance } from "../../Network/interceptor";
import { TbTruckLoading } from "react-icons/tb";
import BestOffer from "../../components/BestOffer/BestOffer";
import { Spinner } from "flowbite-react";
// Lazy loading
const RecommendedCard = lazy(() =>
  import("../../components/RecommendedCard/RecommendedCard")
);
function HomePage() {
  const [bestOffers, setBestOffer] = useState([]);

  useEffect(() => {
    axiosInstance.get(`/best_offer`).then((res) => {
      console.log(res.data);
      return setBestOffer(res.data);
    });
  }, []);
  return (
    <>
      <h2 className='text-2xl font-bold py-3 '>Recommended Hotels</h2>
      <Suspense
        fallback={
          <Spinner/>
        }>
        <div className='flex flex-wrap gap-5 justify-between'>
          <RecommendedCard />
        </div>
      </Suspense>

      <div className='bg-white rounded-2xl p-7 my-10  '>
        <h2 className='font-bold text-2xl mb-6'> Best Offer</h2>
        <div className='flex flex-wrap gap-4 justify-between'>
          {bestOffers.map((bestOffer) => (
            <BestOffer key={bestOffer.id} bestOffer={bestOffer} />
          ))}
        </div>
      </div>
    </>
  );
}

export default HomePage;
