import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");

  const countries = [
    { label: "United States", value: "US" },
    { label: "Morocco", value: "MA" },
    { label: "Egypt", value: "EG" },
    { label: "Greece", value: "GR" },
  ];

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (searchText) params.append("q", searchText);
    if (selectedCountry) params.append("country", selectedCountry);
    navigate(`/search?${params.toString()}`);
  };

  const handleClear = () => {
    setSearchText("");
    setSelectedCountry("");
  };

  return (
    <div className='w-4/5 ms-auto pe-20 ps-5 relative bottom-4'>
      <div className='bg-white rounded-2xl shadow-md p-4 flex flex-wrap items-center justify-between gap-4'>
        {/* Search by name */}
        <div className='flex flex-col'>
          <label className='text-xs text-gray-400 font-semibold mb-1'>
            SEARCH
          </label>
          <input
            type='text'
            placeholder='Search by name'
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className='rounded-full px-6 py-2 bg-gray-100 text-gray-800 w-40 font-semibold text-sm'
          />
        </div>

        {/* Country */}
        <div className='flex flex-col'>
          <label className='text-xs text-gray-400 font-semibold mb-1'>
            COUNTRY
          </label>
          <select
            className='rounded-full px-6 py-2 bg-gray-100 text-gray-800 w-40 font-semibold text-sm'
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
          >
            <option value=''>All</option>
            {countries.map((country, index) => (
              <option key={index} value={country.value}>
                {country.label}
              </option>
            ))}
          </select>
        </div>

        {/* Check-In */}
        <div className='flex flex-col'>
          <label className='text-xs text-gray-400 font-semibold mb-1'>
            CHECK-IN
          </label>
          <input
            type='date'
            className='rounded-full px-6 py-2 bg-gray-100 text-gray-800 w-40 font-semibold text-sm'
            defaultValue='2025-08-21'
          />
        </div>

        {/* Check-Out */}
        <div className='flex flex-col'>
          <label className='text-xs text-gray-400 font-semibold mb-1'>
            CHECK-OUT
          </label>
          <input
            type='date'
            className='rounded-full px-6 py-2 bg-gray-100 text-gray-800 w-40 font-semibold text-sm'
            defaultValue='2025-08-24'
          />
        </div>

        {/* Buttons */}
        <div className='flex items-center gap-4'>
          <button
            className='text-black font-semibold hover:underline text-sm'
            onClick={handleClear}
          >
            Clear Filters
          </button>
          <button
            className='bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-full text-sm'
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
