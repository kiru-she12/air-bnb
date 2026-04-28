import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PropertyCard = ({ property }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <Link 
      to={`/property/${property.id}`}
      className="group cursor-pointer flex flex-col gap-3 relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Carousel Mockup */}
      <div className="relative aspect-[1.05/1] overflow-hidden rounded-xl bg-gray-200">
        <img 
          src={property?.image || `https://picsum.photos/seed/${property.id}/600/600`} 
          alt={property.title}
          className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
        {/* Heart Icon */}
        <button 
          onClick={(e) => { e.stopPropagation(); setIsLiked(!isLiked); }}
          className="absolute top-3 right-3 p-1 rounded-full text-white hover:scale-110 active:scale-95 transition-transform"
        >
          <svg className={`w-7 h-7 ${isLiked ? 'fill-[#ff385c] text-[#ff385c]' : 'fill-black/30 text-white stroke-[2px]'}`} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 28.258l-1.39-1.259C9.25 21.6 5 17.65 5 12.65 5 8.7 8.05 5.65 12 5.65c2.25 0 4.414 1.059 5.86 2.729A7.957 7.957 0 0116 5.65C19.95 5.65 23 8.7 23 12.65c0 5-4.25 8.95-9.61 14.349L16 28.258z" stroke="currentColor"/>
          </svg>
        </button>
        {/* Guest Favorite Badge */}
        {property.rating > 4.9 && (
          <div className="absolute top-3 left-3 bg-white/90 backdrop-blur block px-3 py-1 rounded-full text-sm font-semibold shadow border border-gray-100">
            Guest favorite
          </div>
        )}
      </div>

      {/* Property Details */}
      <div className="flex justify-between items-start mt-1">
        <div>
          <h3 className="font-semibold text-[15px] text-gray-900 line-clamp-1">{property.location}</h3>
          <p className="text-gray-500 text-[15px] mt-0.5 line-clamp-1">{property.title}</p>
          <p className="text-gray-500 text-[15px] mt-0.5">Oct 12 - 17</p>
          <div className="mt-1 flex items-baseline gap-1">
            <span className="font-semibold text-gray-900">${property.price_per_night}</span>
            <span className="text-gray-900">night</span>
          </div>
        </div>
        <div className="flex items-center gap-1 font-medium text-[15px]">
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 32 32"><path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"></path></svg>
          {property.rating}
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
