function SearchBar() {
  const countries = [
    { label: "United States", value: "US" },
    { label: "Morocco", value: "MA" },
    {
      label: "Egypt",
      value: "EG",
    },
    { label: "Greece", value: "GR" },
  ];

  return (
    <>
      <div className='w-4/5 ms-auto pe-20 ps-5 relative bottom-4'>
        <div
          className='bg-white rounded-2xl shadow-md p-4 flex flex-wrap items-center justify-between gap-4 
            '>
          {/* Search Input */}
          <div className='flex flex-col'>
            <label className='text-xs text-gray-400 font-semibold mb-1'>
              SEARCH
            </label>
            <input
              type='text'
              placeholder='Egypt'
              className='rounded-full px-4 py-2 bg-gray-100 text-gray-800 w-40'
            />
          </div>

          {/* Country Select */}
          <div className='flex flex-col'>
            <label className='text-xs text-gray-400 font-semibold mb-1'>
              COUNTRY
            </label>
            <select className='rounded-full px-4 py-2 bg-gray-100 text-gray-800 w-40'>
              {countries.map((country) => (
                <option value={country.value}>{country.label}</option>
              ))}
            </select>
          </div>

          {/* Check-in */}
          <div className='flex flex-col'>
            <label className='text-xs text-gray-400 font-semibold mb-1'>
              CHECK-IN
            </label>
            <input
              type='date'
              className='rounded-full px-4 py-2 bg-gray-100 text-gray-800 w-40'
              defaultValue='2025-08-21'
            />
          </div>

          {/* Check-out */}
          <div className='flex flex-col'>
            <label className='text-xs text-gray-400 font-semibold mb-1'>
              CHECK-OUT
            </label>
            <input
              type='date'
              className='rounded-full px-4 py-2 bg-gray-100 text-gray-800 w-40'
              defaultValue='2025-08-24'
            />
          </div>

          {/* Clear and Search Buttons */}
          <div className='flex items-center gap-4'>
            <button className='text-black font-semibold hover:underline'>
              Clear Filters
            </button>
            <button className='bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-full'>
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
