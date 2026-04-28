import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Search from './pages/Search';
import PropertyDetails from './pages/PropertyDetails';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';

// Simple Layout wrapper to keep Navbar on all pages
const Layout = ({ children }) => (
  <div className="min-h-screen bg-[#f9fafb] text-gray-900 font-sans flex flex-col pt-20">
    <Navbar />
    {/* Floating demo nav links to show routing works easily without a real database yet */}
    <div className="bg-gray-800 text-white text-xs py-1 px-4 flex justify-between z-50 rounded-b-lg mb-2 mx-auto max-w-2xl gap-4 flex-wrap">
      <span className="font-bold text-gray-400">DEMO NAV:</span>
      <Link to="/" className="hover:text-[#ff385c]">Home</Link>
      <span className="text-gray-600">|</span>
      <Link to="/search" className="hover:text-[#ff385c]">Map Search</Link>
      <span className="text-gray-600">|</span>
      <Link to="/property/1" className="hover:text-[#ff385c]">View details</Link>
      <span className="text-gray-600">|</span>
      <Link to="/login" className="hover:text-[#ff385c]">Auth Page</Link>
      <span className="text-gray-600">|</span>
      <Link to="/dashboard" className="hover:text-[#ff385c]">Host Dashboard</Link>
    </div>
    
    <div className="flex-1">
      {children}
    </div>
    
    {/* Global Footer */}
    <footer className="bg-gray-100 border-t border-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-8 text-sm text-gray-600 flex flex-col md:flex-row justify-between items-center">
        <span>© 2026 Airbnb Clone, Inc. All rights reserved.</span>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Terms</a>
          <a href="#" className="hover:underline">Sitemap</a>
        </div>
      </div>
    </footer>
  </div>
);

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
