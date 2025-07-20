import React from "react";

function HotelDetailsCard() {
  return (
    <>
      <div className='bg-white rounded-xl shadow-md p-6'>
        <div className='grid lg:grid-cols-2 gap-6'>
          {/* Left: Image & Thumbnails */}
          <div className='space-y-4'>
            <img
              src='https://via.placeholder.com/600x300'
              alt='Hotel'
              className='rounded-lg w-full h-auto'
            />
            <div className='flex gap-2 justify-center'>
              {[1, 2, 3, 4, 5].map((i) => (
                <img
                  key={i}
                  src='https://via.placeholder.com/100'
                  className='w-20 h-14 rounded-md border'
                  alt='thumb'
                />
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
                  <span className='text-sm font-semibold bg-blue-500 text-white px-2 py-1 rounded'>
                    4.9
                  </span>
                  <span className='text-sm text-gray-700 font-semibold'>
                    Excellent
                  </span>
                  <span className='text-xs text-gray-500'>(275 Review)</span>
                  <span className='text-yellow-400'>★★★★★</span>
                </div>
              </div>
              <div className='text-right'>
                <span className='text-red-500 text-sm font-bold'>20% OFF</span>
                <div className='text-2xl font-bold text-gray-800'>399</div>
                <div className='text-xs text-gray-500'>Per night USD</div>
              </div>
            </div>

            {/* About */}
            <div className='mt-4 text-gray-600 text-sm'>
              <p>
                Whether you are in town for business or leisure, San Francisco
                welcomes travelers to Northern California with exceptional
                service, hotel rooms, and a prime downtown location.
              </p>
              <button className='text-blue-600 text-xs font-semibold mt-2'>
                Show More
              </button>
            </div>

            {/* Address */}
            <div className='mt-4 text-sm text-gray-700 flex items-start gap-2'>
              <span>📍</span>
              <span>
                780 Mission Street, San Francisco, CA 94103, United States
              </span>
            </div>

            {/* Popular Services */}
            <div className='mt-4 text-sm text-gray-700'>
              <p className='font-medium mb-1'>Popular Service</p>
              <div className='flex flex-wrap gap-2 text-xs text-gray-600'>
                <span className='bg-gray-100 px-2 py-1 rounded'>
                  🚗 Parking
                </span>
                <span className='bg-gray-100 px-2 py-1 rounded'>
                  🛁 Attached Bathroom
                </span>
                <span className='bg-gray-100 px-2 py-1 rounded'>
                  📷 CCTV Cameras
                </span>
                <span className='bg-gray-100 px-2 py-1 rounded'>📶 WiFi</span>
              </div>
            </div>

            {/* Button */}
            <button className='mt-6 bg-blue-600 text-white font-semibold py-2 px-4 rounded-md w-40'>
              PAY NOW
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HotelDetailsCard;
