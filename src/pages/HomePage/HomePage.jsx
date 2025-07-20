import { lazy, Suspense, useEffect, useState } from "react";
import { axiosInstance } from "../../Network/interceptor";
import { TbTruckLoading } from "react-icons/tb";
// Lazy loading
const RecommendedCard = lazy(() =>
  import("../../components/RecommendedCard/RecommendedCard")
);
function HomePage() {
  const [recommends, setRecommends] = useState([]);
  useEffect(() => {
    axiosInstance.get(`/recommended_hotels`).then((res) => {
      console.log(res.data);
      return setRecommends(res.data);
    });
  }, []);
  return (
    <>
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
          {recommends.map((recommend) => (
            <RecommendedCard key={recommend.id} recommend={recommend} />
          ))}
        </div>
      </Suspense>
    </>
  );
}

export default HomePage;
