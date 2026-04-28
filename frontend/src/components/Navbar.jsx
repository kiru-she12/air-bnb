import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Minimal scroll effect for navbar
  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center cursor-pointer group">
            <svg 
              className={`w-8 h-8 transition-colors ${isScrolled ? 'text-[#ff385c]' : 'text-white group-hover:text-[#ff385c]'}`} 
              fill="currentColor" viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
            </svg>
            <span className={`ml-2 text-xl font-bold tracking-tight transition-colors ${isScrolled ? 'text-[#ff385c]' : 'text-white'}`}>Staycation</span>
          </div>

          {/* Search Pill (visible mainly on scroll) */}
          <div className={`hidden md:flex items-center bg-white rounded-full shadow-sm border border-gray-200 px-4 py-2 hover:shadow-md transition-all cursor-pointer ${isScrolled ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
            <span className="text-sm font-medium px-4">Anywhere</span>
            <span className="w-px h-6 bg-gray-200" />
            <span className="text-sm font-medium px-4">Any week</span>
            <span className="w-px h-6 bg-gray-200" />
            <span className="text-sm text-gray-500 px-4">Add guests</span>
            <div className="bg-[#ff385c] text-white p-2 rounded-full h-8 w-8 flex items-center justify-center pointer-events-none">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
          </div>

          {/* User Menu */}
          <div className="flex items-center space-x-4">
            <Link to="/dashboard" className={`text-sm font-medium hidden md:block cursor-pointer transition-colors ${isScrolled ? 'text-gray-700 hover:text-black' : 'text-white hover:text-gray-200'}`}>
              Become a host
            </Link>
            <div className={`p-2 rounded-full cursor-pointer transition-colors ${isScrolled ? 'hover:bg-gray-100' : 'hover:bg-white/20'}`}>
              <svg className={`w-5 h-5 ${isScrolled ? 'text-gray-700' : 'text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
            </div>
            <Link to="/login" className="flex items-center space-x-2 border border-gray-200 rounded-full p-2 hover:shadow-md transition bg-white text-gray-700 cursor-pointer">
              <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
              <div className="bg-gray-500 text-white rounded-full p-1 h-7 w-7 flex items-center justify-center">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
