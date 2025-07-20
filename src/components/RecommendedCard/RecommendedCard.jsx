import React from "react";
import img from "../../assets/images/Image.png";
function RecommendedCard() {
  return (
    <>
      <a
        href='#'
        className='flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'>
        <img
          className='object-cover w-3/4 rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg p-4'
          src={img}
        />
        <div className="p-4">
          <div className='flex flex-col justify-between  leading-normal'>
            <p className='text-gray-400'>HOTEL</p>
            <h5 className='mb-2 text-xl font-bold tracking-tight text-gray-900'>
              Noteworthy technology acquisitions 
            </h5>
            <p className='mb-3 font-normal text-gray-600'>
              Here are the biggest enterprise technology{" "}
            </p>
          </div>
          <div className='flex justify-between items-center'>
            <p>
              Cupon : <span className='font-bold'> DHGHJHJ</span>
            </p>
            <button
              type='button'
              className='py-2.5 px-5 ms-2  text-sm font-medium text-red-700 focus:outline-none bg-red-100 rounded-full  hover:bg-red-200  '>
              Book Now
            </button>
          </div>
        </div>
      </a>
    </>
  );
}

export default RecommendedCard;
