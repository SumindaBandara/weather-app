import { useState } from "react";

function SearchBar({ onSearch }) {
    const [city, setCity] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (city.trim()) onSearch(city);
    };
  
    return (
      <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
          className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
        >
          Search
        </button>
      </form>
    );
  }
  export default SearchBar;
  