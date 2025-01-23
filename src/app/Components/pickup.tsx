const PickDropSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-6 p-6 bg-gray-50">
      {/* Pick-Up Section */}
      <div className="w-full lg:flex-1 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-blue-400 font-semibold mb-4">🔵 Pick-Up</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <label htmlFor="pick-location" className="font-semibold text-black">Locations</label>
            <select id="pick-location" className="w-full p-2 border rounded mt-1 text-black">
              <option value="" disabled>Select your city</option>
              <option value="new-york">New York</option>
              <option value="los-angeles">Los Angeles</option>
              <option value="chicago">Chicago</option>
            </select>
          </div>
          <div>
            <label htmlFor="pick-date" className="font-semibold text-black">Date</label>
            <input id="pick-date" type="date" className="w-full p-2 border rounded mt-1 text-black" />
          </div>
          <div>
            <label htmlFor="pick-time" className="font-semibold text-black">Time</label>
            <input id="pick-time" type="time" className="w-full p-2 border rounded mt-1 text-black" />
          </div>
        </div>
      </div>

      {/* Swap Icon */}
      <div className="flex items-center justify-center w-full lg:w-auto">
        <button className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition duration-300">
          <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"/>
          </svg>
        </button>
      </div>

      {/* Drop-Off Section */}
      <div className="w-full lg:flex-1 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-blue-600 font-semibold mb-4">🔵 Drop-Off</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <label htmlFor="drop-location" className="font-semibold text-black">Locations</label>
            <select id="drop-location" className="w-full p-2 border rounded mt-1 text-black">
              <option value="" disabled>Select your city</option>
              <option value="new-york">New York</option>
              <option value="los-angeles">Los Angeles</option>
              <option value="chicago">Chicago</option>
            </select>
          </div>
          <div>
            <label htmlFor="drop-date" className="font-semibold text-black">Date</label>
            <input id="drop-date" type="date" className="w-full p-2 border rounded mt-1 text-black" />
          </div>
          <div>
            <label htmlFor="drop-time" className="font-semibold text-black">Time</label>
            <input id="drop-time" type="time" className="w-full p-2 border rounded mt-1 text-black" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PickDropSection;
