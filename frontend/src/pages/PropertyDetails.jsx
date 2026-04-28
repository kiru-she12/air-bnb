import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const PropertyDetails = () => {
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);

  // Mock property data based on ID
  const property = {
    id: id,
    title: 'Spectacular Glass House in the Mountains',
    location: 'Aspen, Colorado, United States',
    rating: 4.98,
    reviews: 142,
    host: {
      name: 'Sarah',
      joined: '2019',
      trustScore: 98,
      superhost: true
    },
    price_per_night: 650,
    images: [
      'https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&q=80&w=600',
    ]
  };

  return (
    <div className="pt-24 pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl sm:text-4xl font-semibold mb-2">{property.title}</h1>
        <div className="flex items-center gap-4 text-sm font-medium">
          <div className="flex items-center gap-1">
            <span className="text-amber-500">★</span> 
            <span>{property.rating}</span>
            <span className="text-gray-500 underline cursor-pointer">{property.reviews} reviews</span>
          </div>
          {property.host.superhost && (
             <span className="text-gray-500 flex items-center gap-1">
               <svg className="w-4 h-4 text-[#ff385c]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg> 
               Superhost
             </span>
          )}
          <span className="text-gray-500 underline cursor-pointer">{property.location}</span>
        </div>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 h-[50vh] min-h-[400px] mb-10 rounded-2xl overflow-hidden cursor-pointer group">
        <div className="md:col-span-2 md:row-span-2 h-full">
          <img src={property.images[0]} alt="Main" className="w-full h-full object-cover group-hover:brightness-90 transition duration-300" />
        </div>
        <div className="hidden md:block">
          <img src={property.images[1]} alt="View 2" className="w-full h-full object-cover group-hover:brightness-90 transition duration-300" />
        </div>
        <div className="hidden md:block">
          <img src={property.images[2]} alt="View 3" className="w-full h-full object-cover group-hover:brightness-90 transition duration-300" />
        </div>
        <div className="hidden md:block">
          <img src={property.images[3]} alt="View 4" className="w-full h-full object-cover group-hover:brightness-90 transition duration-300" />
        </div>
        <div className="hidden md:block">
          <img src={property.images[4]} alt="View 5" className="w-full h-full object-cover group-hover:brightness-90 transition duration-300" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-12">
        {/* Main Content Info */}
        <div className="md:w-2/3">
          <div className="flex justify-between items-start border-b border-gray-200 pb-6 mb-6">
            <div>
              <h2 className="text-2xl font-semibold mb-1">Entire chalet hosted by {property.host.name}</h2>
              <p className="text-gray-600">6 guests · 3 bedrooms · 4 beds · 2 baths</p>
            </div>
            <div className="w-14 h-14 bg-gray-300 rounded-full flex items-center justify-center text-xl font-bold text-white overflow-hidden shadow-sm">
                <img src={`https://api.dicebear.com/7.x/notionists/svg?seed=${property.host.name}`} alt="Host" />
            </div>
          </div>

          <div className="border-b border-gray-200 pb-6 mb-6 space-y-6">
            <div className="flex gap-4">
              <svg className="w-8 h-8 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
              <div>
                <h3 className="font-semibold text-lg">Superhost</h3>
                <p className="text-gray-500 text-sm">Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <div>
                <h3 className="font-semibold text-lg text-green-700">Verified Trust Score: {property.host.trustScore}/100</h3>
                <p className="text-gray-500 text-sm">Calculated by our AI system using ratings, response times, and cancellation rates.</p>
              </div>
            </div>
          </div>

          <div className="pb-6">
            <h2 className="text-xl font-semibold mb-4">About this space</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Experience the ultimate mountain getaway in this spectacular glass house. Floor-to-ceiling windows provide panoramic views of the surrounding peaks, bridging the gap between modern luxury and raw nature.
            </p>
            <p className="text-gray-700 leading-relaxed font-semibold cursor-pointer underline hover:text-black">
              Show more &gt;
            </p>
          </div>
        </div>

        {/* Booking Sidebar Widget */}
        <div className="md:w-1/3">
          <div className="sticky top-28 bg-white border border-gray-200 shadow-xl rounded-2xl p-6">
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-2xl font-bold">${property.price_per_night}</span>
              <span className="text-gray-600">night</span>
            </div>

            <div className="border border-gray-400 rounded-xl overflow-hidden mb-4">
              <div className="flex border-b border-gray-400">
                <div className="p-3 w-1/2 border-r border-gray-400">
                  <div className="text-[10px] font-bold uppercase tracking-wider">Check-in</div>
                  <div className="text-sm">Add date</div>
                </div>
                <div className="p-3 w-1/2">
                  <div className="text-[10px] font-bold uppercase tracking-wider">Checkout</div>
                  <div className="text-sm">Add date</div>
                </div>
              </div>
              <div className="p-3">
                <div className="text-[10px] font-bold uppercase tracking-wider">Guests</div>
                <div className="text-sm">1 guest</div>
              </div>
            </div>

            <button 
              onClick={() => setShowModal(true)}
              className="w-full bg-[#ff385c] hover:bg-[#d90b39] text-white font-semibold py-3.5 rounded-lg transition text-lg mb-4"
            >
              Reserve
            </button>
            <p className="text-center text-sm text-gray-500">You won't be charged yet</p>
          </div>
        </div>
      </div>

      {/* Booking Success Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl transform transition-all text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
               <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <h3 className="text-2xl font-bold mb-2">Booking Reserved!</h3>
            <p className="text-gray-500 mb-6">Your dates at {property.title} have been secured. The host has been notified.</p>
            <button 
              onClick={() => setShowModal(false)}
              className="w-full bg-gray-900 hover:bg-black text-white font-bold py-3 rounded-xl transition"
            >
              Back to Property
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyDetails;
