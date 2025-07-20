function SummaryCard() {
  return (
    <div className='bg-white rounded-xl shadow p-4 w-full max-w-sm'>
      <h2 className='text-xl font-bold mb-4'>Summary</h2>

      <img
        src='https://via.placeholder.com/400x200'
        alt='Hotel'
        className='rounded-md mb-4'
      />

      <div className='mb-2'>
        <p className='font-semibold'>San Francisco Marriott Marquis ..</p>
        <p className='text-sm text-gray-500'>
          🏨 780 Mission Street, San Francisco
        </p>
      </div>

      <div className='flex justify-between items-center mb-4'>
        <span className='text-red-600 font-semibold'>20% OFF</span>
        <span className='text-2xl font-bold'>
          399 <span className='text-sm font-medium text-gray-500'>USD</span>
        </span>
      </div>

      <div className='text-sm text-gray-600 mb-2'>
        <p>
          <strong>Check In:</strong> 22 Aug, 2020, Tuesday
        </p>
        <p>
          <strong>Check Out:</strong> 24 Aug, 2020, Tuesday
        </p>
      </div>

      <hr className='my-4' />

      <div className='text-sm text-gray-700 space-y-1'>
        <div className='flex justify-between'>
          <span>Price Per Night</span>
          <span>$399</span>
        </div>
        <div className='flex justify-between'>
          <span>Nights</span>
          <span>2</span>
        </div>
        <div className='flex justify-between font-bold text-black pt-2 border-t'>
          <span>Total Price</span>
          <span>$798</span>
        </div>
      </div>
    </div>
  );
}
export default SummaryCard;
