import { FcCheckmark } from "react-icons/fc";
import { TiLocation } from "react-icons/ti";
import { Link } from "react-router-dom";

function HotelDetailsCard({ hotelDetails }) {
  const {
    name,
    images = {},
    address,
    amenities,
    description,
    pricing = [],
    rating,
  } = hotelDetails;
  const { gallery = [], main = "" } = images;

  console.log(gallery);
  console.log(main);

  return (
    <>
      <div className='bg-white rounded-xl shadow-md p-6'>
        <p className='text-xl font-bold mb-2'>{name}</p>

        <div className='grid lg:grid-cols-2 gap-6'>
          {/* Left: Image & Thumbnails */}

          {/* <CustomPaging gallery={gallery} main={main} /> */}
          <div className='space-y-4'>
            <img src={main} alt='Hotel' className='rounded-lg w-full h-auto' />
            <div className='flex gap-2 justify-center'>
              {gallery?.map((i, idx) => (
                <img key={i + idx} src={i} className='w-20 h-14 rounded-md ' />
              ))}
            </div>
          </div>

          {/* Right: Hotel Info */}
          <div className='flex flex-col justify-between'>
            {/* Rating + Price */}
            <div className='flex justify-between items-start'>
              <div className='space-y-1'>
                <p className='text-sm text-gray-500'>Hotel Review</p>
                <div className='flex items-center gap-2'>
                  <span className='bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded w-18 ms-1 grow-0 text-center'>
                    {rating?.score} ★
                  </span>
                  <span className='text-sm text-gray-700 font-semibold'>
                    {rating?.status}
                  </span>
                  <span className='text-xs text-gray-500'>
                    {rating?.reviewCount} Review
                  </span>
                  <span className='text-yellow-400'>★★★★★</span>
                </div>
              </div>
              <div className='text-right'>
                <span className='text-red-500 text-sm font-bold'>
                  {pricing[0]?.discount}
                </span>
                <div className='text-2xl font-bold text-gray-800'>
                  {pricing[0]?.discountPrice}
                </div>
                <div className='text-xs text-gray-500'>
                  {pricing[0]?.priceUnit} {pricing[0]?.currency}
                </div>
              </div>
            </div>
            {/* About */}
            <div className='mt-4 '>
              <h2 className='text-lg font-bold'>About </h2>
              <p className=' text-gray-600 text-sm'>{description}</p>
              <button className='text-blue-600 text-xs font-semibold mt-2'>
                Show More
              </button>
            </div>
            {/* Address */}
            <div className='mt-4 text-sm text-gray-700 flex items-start gap-2'>
              <TiLocation size={22} />

              <span>
                {address?.street} , {address?.city} , {address?.state} ,{" "}
                {address?.country}{" "}
              </span>
            </div>
            {/* Popular Services */}
            <div className='mt-4 text-sm text-gray-700'>
              <p className='font-medium mb-1'>Popular Service</p>
              <div className='flex flex-wrap gap-2 text-xs text-gray-600'>
                {amenities?.map((amenity, index) => (
                  <div key={index} className='flex'>
                    <FcCheckmark size={14} />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Button */}
            <Link
              to='/bookingpage'
              state={{ hotel: hotelDetails }}
              className='mt-6 bg-blue-600 text-white font-semibold py-2 px-4 text-center rounded-md w-40'>
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default HotelDetailsCard;
