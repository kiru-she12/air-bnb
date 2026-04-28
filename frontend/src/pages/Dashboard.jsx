import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="pt-24 min-h-screen bg-gray-50 flex max-w-7xl mx-auto w-full">
      {/* Sidebar Navigation */}
      <aside className="w-64 p-6 hidden lg:block border-r border-gray-200 bg-white shadow-sm h-screen sticky top-20">
        <h3 className="font-bold text-xl mb-8">Host Dashboard</h3>
        <nav className="space-y-2 text-sm font-medium">
          <a href="#" className="flex items-center gap-3 px-3 py-2 text-[#ff385c] bg-[#ff385c]/10 rounded-lg"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>Overview</a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>My Properties</a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>Bookings</a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"/></svg>Inbox <span className="bg-[#ff385c] text-white text-xs px-2 py-0.5 rounded-full ml-auto">3</span></a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>Earnings</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">Welcome back, Sarah!</h2>
            <p className="text-gray-500 mt-1">Here's a breakdown of your hosting performance.</p>
          </div>
          <Link to="/" className="bg-[#ff385c] text-white px-5 py-2.5 rounded-xl font-bold shadow-md hover:bg-[#d90b39] transition">
            Create new listing
          </Link>
        </div>

        {/* trust score alert */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-100 border border-green-200 rounded-2xl p-6 mb-8 flex items-center justify-between shadow-sm">
          <div>
            <h3 className="text-xl font-bold text-green-800 flex items-center gap-2">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              Outstanding Host Trust Score
            </h3>
            <p className="text-green-700 mt-1 max-w-2xl">Your score is currently at <strong>98/100</strong>. You are in the top 2% of hosts in your area based on our AI evaluation of response times, rating quality, and negligible cancellation rates.</p>
          </div>
          <div className="w-20 h-20 rounded-full border-4 border-green-500 flex items-center justify-center bg-white shadow-inner">
             <span className="text-2xl font-black text-green-600">98</span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex items-center gap-4">
             <div className="p-3 bg-blue-50 rounded-xl text-blue-600"><svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/></svg></div>
             <div>
               <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">Bookings</p>
               <h4 className="text-2xl font-bold">142</h4>
             </div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex items-center gap-4">
             <div className="p-3 bg-purple-50 rounded-xl text-purple-600"><svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/></svg></div>
             <div>
               <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">Avg Rating</p>
               <h4 className="text-2xl font-bold">4.98</h4>
             </div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex items-center gap-4">
             <div className="p-3 bg-green-50 rounded-xl text-green-600"><svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg></div>
             <div>
               <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">30-Day Earnings</p>
               <h4 className="text-2xl font-bold">$12,450</h4>
             </div>
          </div>
        </div>

        {/* Approvals Table */}
        <div className="bg-white border text-left border-gray-200 rounded-2xl shadow-sm overflow-hidden">
           <div className="px-6 py-5 border-b border-gray-200">
              <h3 className="text-lg font-bold">Recent Booking Requests</h3>
           </div>
           <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                   <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Guest</th>
                   <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Property</th>
                   <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Dates</th>
                   <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                   <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                 {[
                   { guest: 'Michael T.', prop: 'Spectacular Glass House', dates: 'Oct 20 - Oct 25', status: 'Pending' },
                   { guest: 'Emma W.', prop: 'Spectacular Glass House', dates: 'Nov 1 - Nov 5', status: 'Confirmed' },
                   { guest: 'David L.', prop: 'Modern Mountain Cabin', dates: 'Dec 12 - Dec 18', status: 'Pending' }
                 ].map((booking, i) => (
                    <tr key={i} className="hover:bg-gray-50 transition">
                       <td className="px-6 py-4 font-medium">{booking.guest}</td>
                       <td className="px-6 py-4 text-gray-500">{booking.prop}</td>
                       <td className="px-6 py-4 text-gray-500">{booking.dates}</td>
                       <td className="px-6 py-4">
                         <span className={`px-3 py-1 text-xs font-bold rounded-full ${booking.status === 'Confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                            {booking.status}
                         </span>
                       </td>
                       <td className="px-6 py-4">
                          {booking.status === 'Pending' ? (
                            <div className="flex gap-2">
                               <button className="text-green-600 font-bold text-sm bg-green-50 px-3 py-1 rounded-md hover:bg-green-100">Approve</button>
                               <button className="text-red-600 font-bold text-sm bg-red-50 px-3 py-1 rounded-md hover:bg-red-100">Decline</button>
                            </div>
                          ) : (
                             <span className="text-gray-400 text-sm">Actioned</span>
                          )}
                       </td>
                    </tr>
                 ))}
              </tbody>
           </table>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
