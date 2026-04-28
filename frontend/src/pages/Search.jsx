import React, { useState, useEffect } from 'react';
import PropertyCard from '../components/PropertyCard';
import { fetchProperties } from '../services/api';

const Search = () => {
  const [filters, setFilters] = useState({ type: 'All', price: 500 });
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchProperties();
      // For demo purposes, we will just use the returned properties directly. 
      // In reality, we would pass 'filters' to a search endpoint.
      setSearchResults(data);
    };
    loadData();
  }, [filters]);

  return (
    <div className="pt-24 min-h-screen bg-white flex max-w-7xl mx-auto">
      {/* Sidebar Filters */}
      <aside className="w-1/4 p-6 hidden lg:block border-r border-gray-100">
        <h3 className="font-bold text-lg mb-6">Filters</h3>
        
        <div className="mb-8">
          <h4 className="font-medium text-gray-900 mb-4">Price range</h4>
          <input 
            type="range" 
            min="10" 
            max="1000" 
            value={filters.price} 
            onChange={(e) => setFilters({...filters, price: e.target.value})}
            className="w-full accent-[#ff385c]"
          />
          <div className="flex justify-between text-sm text-gray-500 mt-2">
            <span>$10</span>
            <span>${filters.price}+</span>
          </div>
        </div>

        <div className="mb-8">
          <h4 className="font-medium text-gray-900 mb-4">Property type</h4>
          <div className="space-y-3">
            {['Entire place', 'Private room', 'Shared room'].map((type) => (
              <label key={type} className="flex items-center space-x-3 cursor-pointer">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-[#ff385c] rounded border-gray-300 focus:ring-[#ff385c]" defaultChecked={type === 'Entire place'} />
                <span className="text-gray-700">{type}</span>
              </label>
            ))}
          </div>
        </div>
      </aside>

      {/* Search Results */}
      <main className="flex-1 p-6">
        <div className="mb-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold">Over 1,000 places within mock filters</h2>
          <button className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2 hover:border-gray-900 transition-colors">
             <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
             Sort by
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {searchResults.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Search;
