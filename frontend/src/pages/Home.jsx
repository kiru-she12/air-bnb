import React, { useEffect, useState } from 'react';
import PropertyCard from '../components/PropertyCard';
import { fetchProperties } from '../services/api';

const Home = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchProperties();
      setProperties(data);
    };
    loadData();
  }, []);

  return (
    <>
      <div className="pt-28 pb-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center space-x-8 overflow-x-auto no-scrollbar py-2">
          {['Icons', 'Amazing pools', 'Beachfront', 'Cabins', 'OMG!', 'Ski-in/out', 'Lakefront', 'Treehouses', 'Tiny homes', 'Castles'].map((category, idx) => (
            <div key={category} className={`flex flex-col items-center gap-2 cursor-pointer transition-all min-w-max hover:opacity-100 ${idx === 3 ? 'opacity-100 border-b-2 border-black pb-1' : 'opacity-60 border-b-2 border-transparent pb-1'}`}>
              <div className="w-6 h-6 bg-gray-400 rounded-full" />
              <span className={`text-sm font-medium ${idx === 3 ? 'text-black' : 'text-gray-600'}`}>{category}</span>
            </div>
          ))}
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 mb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </main>

      <section className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <h2 className="text-3xl font-extrabold mb-4">Smart Recommendations for You</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg mb-8">
                Based on your past views, our AI engine handpicks properties that meet your unique vibe. Host Trust Scores ensure your safety, guaranteeing 5-star experiences every time.
            </p>
            <button className="bg-[#ff385c] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#d90b39] hover:scale-105 active:scale-95 transition-all w-full max-w-xs shadow-lg">
               Generate AI Itinerary
            </button>
        </div>
      </section>
    </>
  );
};

export default Home;
