function BookingFormCard() {
  return (
    <div className='bg-white rounded-xl shadow p-6 w-full max-w-3xl'>
      {/* Header */}
      <h2 className='text-xl font-bold mb-1'>Your Details</h2>
      <p className='text-sm text-gray-500 mb-6'>
        Whether you are in town for business or leisure, San Francisco Marriott
        Marquis welcomes travelers to Northern California with exceptional
        service, spacious
      </p>

      {/* Form Grid */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-4'>
        <div>
          <label className='text-sm font-semibold text-gray-600'>Title</label>
          <select className='w-full mt-1 bg-gray-100 px-4 py-2 rounded-md'>
            <option>Mr</option>
            <option>Mrs</option>
          </select>
        </div>
        <div>
          <label className='text-sm font-semibold text-gray-600'>
            Fast Name
          </label>
          <input
            type='text'
            placeholder='John'
            className='w-full mt-1 bg-gray-100 px-4 py-2 rounded-md'
          />
        </div>
        <div>
          <label className='text-sm font-semibold text-gray-600'>
            Last Name
          </label>
          <input
            type='text'
            placeholder='Enter your last name'
            className='w-full mt-1 bg-gray-100 px-4 py-2 rounded-md'
          />
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
        <div>
          <label className='text-sm font-semibold text-gray-600'>Email</label>
          <input
            type='email'
            placeholder='yourmail@gmail.com'
            className='w-full mt-1 bg-gray-100 px-4 py-2 rounded-md'
          />
        </div>
        <div>
          <label className='text-sm font-semibold text-gray-600'>Mobile</label>
          <input
            type='text'
            placeholder='+20 000 0000 000'
            className='w-full mt-1 bg-gray-100 px-4 py-2 rounded-md'
          />
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-6'>
        <div>
          <label className='text-sm font-semibold text-gray-600'>Country</label>
          <select className='w-full mt-1 bg-gray-100 px-4 py-2 rounded-md'>
            <option>Egypt</option>
            <option>UAE</option>
          </select>
        </div>
      </div>

      {/* Payment Section */}
      <hr className='my-6' />
      <h2 className='text-xl font-bold mb-4'>Payment Details</h2>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
        <div>
          <label className='text-sm font-semibold text-gray-600'>
            Card Number
          </label>
          <input
            type='text'
            placeholder='*** *** *** ***'
            className='w-full mt-1 bg-gray-100 px-4 py-2 rounded-md'
          />
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
        <div>
          <label className='text-sm font-semibold text-gray-600'>CVV</label>
          <input
            type='text'
            placeholder='123'
            className='w-full mt-1 bg-gray-100 px-4 py-2 rounded-md'
          />
        </div>
        <div>
          <label className='text-sm font-semibold text-gray-600'>
            Expiry Date
          </label>
          <input
            type='text'
            placeholder='8/8/2030'
            className='w-full mt-1 bg-gray-100 px-4 py-2 rounded-md'
          />
        </div>
      </div>

      <div className='mb-6'>
        <label className='text-sm font-semibold text-gray-600'>
          Card Holder
        </label>
        <input
          type='text'
          placeholder='Ahmed Mohamed Ahmed Aly'
          className='w-full mt-1 bg-gray-100 px-4 py-2 rounded-md'
        />
      </div>

      <button className='w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-semibold'>
        PAY NOW
      </button>
    </div>
  );
}
export default BookingFormCard;
