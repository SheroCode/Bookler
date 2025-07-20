function RecommendedCard({ recommend }) {
  return (
    <>
      <a
        href='#'
        className='flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row max-w-lg hover:bg-gray-100 p-5 '>
        
        <img
          className=' md:w-2/5  rounded-2xl shadow-xl  w-full mb-3'
          src={recommend.images.main}
        />
        <div className='ps-5 '>
          <div className='flex flex-col justify-between  leading-normal'>
            <p className='text-gray-400 text-sm'>HOTEL</p>
            <h5 className='mb-2 text-lg font-bold tracking-tight text-gray-900'>{
              recommend.name}
            </h5>
            <p className='mb-3 font-normal text-gray-600 line-clamp-2 '>
           {recommend.description}
            </p>
          </div>
          <div className='flex justify-between items-center'>
            <p>
              Status: <span className='font-bold'> {recommend.rating.status}</span>
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
