import { useEffect, useState } from "react";
import { axiosInstance } from "../../Network/interceptor";
import Slider from "react-slick";
import "./Recommended.css";
function RecommendedCard() {
  const [recommends, setRecommends] = useState([]);

  useEffect(() => {
    axiosInstance.get(`/recommended_hotels`).then((res) => {
      console.log(res.data);
      return setRecommends(res.data);
    });
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className='w-full px-4 py-10 '>
        <Slider {...settings}>
          {recommends.map((recommend) => (
            <div
              key={recommend.id}
              className='recommended lg:flex-row   flex-col  items-center bg-white border border-gray-200 rounded-lg shadow-sm  lg:w-lg w-full hover:bg-gray-100 p-3 '>
              <img
                className=' lg:w-4/12 h-full rounded-2xl shadow-xl  w-full mb-3 lg:mb-0 max-w-150'
                src={recommend.images.main}
              />
              <div className='lg:ps-3 lg:w-9/12 '>
                <div className='flex flex-col justify-between  leading-normal'>
                  <p className='text-gray-400 text-sm'>HOTEL</p>
                  <h5 className='mb-2 text-lg font-bold tracking-tight text-gray-900'>
                    {recommend.name}
                  </h5>
                  <p className='mb-3 font-normal text-gray-600 line-clamp-1 '>
                    {recommend.description}
                  </p>
                </div>
                <div className='flex justify-between items-center'>
                  <p>
                    Status:{" "}
                    <span className='font-bold'>
                      {" "}
                      {recommend.rating.status}
                    </span>
                  </p>
                  <button
                    type='button'
                    className='py-2.5 px-5 ms-2  text-sm font-medium text-red-700 focus:outline-none bg-red-100 rounded-full  hover:bg-red-200  '>
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default RecommendedCard;
