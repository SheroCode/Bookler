import { FcCheckmark } from "react-icons/fc";
import { Link } from "react-router-dom";

function HotelCard({ hotel }) {
  return (
    <div className='bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden w-full max-w-lg mx-auto flex flex-col md:flex-row '>
      {/* Hotel Image */}
      <img
        className='object-cover w-full h-60 md:h-auto md:w-35'
        src={hotel.images.main}
        alt={hotel.name}
      />

      {/* Hotel Info */}
      <div className='flex flex-col justify-between p-4 flex-grow'>
        {/* Name + City */}
        <div>
          <div className='flex justify-between items-start'>
            <h2 className='text-xl font-bold text-gray-800 mb-1 '>
              {hotel.name}
            </h2>
            <span className='bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded w-18 ms-1 grow-0 text-center'>
              {hotel.rating.score} ★
            </span>
          </div>
          <p className='text-gray-500 text-sm'>{hotel.address.city}</p>
        </div>

        {/* Amenities */}
        <div className='flex space-x-6 mt-4 text-gray-500 text-sm'>
          <div className='flex items-center space-x-1'>
            {hotel.amenities.slice(0, 3).map((item, index) => (
              <span key={index} className='flex items-center gap-1'>
                <FcCheckmark  size={14} />
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Pricing + Buttons */}
        <div className='flex flex-wrap items-center justify-between gap-2 mt-4'>
          <p className='text-amber-500 font-semibold'>
            {hotel.pricing[0].discount}
          </p>
          <p className='text-gray-800 font-medium'>
            ${hotel.pricing[0].discountedPrice}
          </p>
          {/* View Details */}
          <Link
            to={`/detailspage/${hotel.id}`}
            type='button'
            className='px-4 py-1 text-sm text-gray-800 bg-gray-200 rounded-lg hover:bg-gray-300 transition-all'>
            View Details
          </Link>
          <button
            type='button'
            className='px-4 py-1 text-sm text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-all'>
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default HotelCard;
