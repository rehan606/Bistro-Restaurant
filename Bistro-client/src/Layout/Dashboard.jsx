import React, { useState } from 'react';
import { FaHome, FaShoppingCart } from 'react-icons/fa';
import { FaCalendar, FaComment, FaGear, FaList, FaOutdent, FaPersonRifle, FaUser, FaWallet } from 'react-icons/fa6';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-blue-900 text-white transform transition-transform duration-300 lg:static lg:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 text-xl font-bold border-b border-blue-700">Dashboard</div>
        <nav className="p-4">
          <ul className="space-y-4">
            
            
            <li className='flex items-center gap-3'>
                <FaShoppingCart></FaShoppingCart>
              <Link to="/dashboard/cart" className="block w-full p-2 rounded hover:bg-blue-700">Cart</Link>
            </li>
           
            <li className='flex items-center gap-3'>
                <FaCalendar></FaCalendar>
              <Link to="/dashboard/reservation" className="block w-full p-2 rounded hover:bg-blue-700">Reservation</Link>
            </li>

            <li className='flex items-center gap-3'>
                <FaWallet></FaWallet>
              <Link to="/dashboard/payment" className="block w-full p-2 rounded hover:bg-blue-700">Payment History</Link>
            </li>

            <li className='flex items-center gap-3'>
                <FaComment></FaComment>
              <Link to="/dashboard/review" className="block w-full p-2 rounded hover:bg-blue-700">Add Review</Link>
            </li>

            <li className='flex items-center gap-3'>
                <FaList></FaList>
              <Link to="/dashboard/booking" className="block w-full p-2 rounded hover:bg-blue-700">My Bookings</Link>
            </li>

            <div className='divider outline-white'></div>

            <li className='flex items-center gap-3 '>
                <FaHome></FaHome>
              <Link to="/" className="block w-full p-2 rounded hover:bg-blue-700">Home</Link>
            </li>

            <li className='flex items-center gap-3'>
                <FaUser></FaUser>
              <Link to="/dashboard/profile" className="block w-full p-2 rounded hover:bg-blue-700">Profile</Link>
            </li>

            <li className='flex items-center gap-3'>
                <FaGear></FaGear>
              <Link to="/dashboard/settings" className="block w-full p-2 rounded hover:bg-blue-700">Settings</Link>
            </li>

            <li className='flex items-center gap-3'>
                <FaOutdent></FaOutdent>
              <Link to="/dashboard/cart" className="block w-full p-2 rounded hover:bg-blue-700">Logout</Link>
            </li>
            
            
            
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <div className="bg-white p-4 border-b flex items-center justify-between lg:hidden">
          <button
            className="text-blue-900 focus:outline-none"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? "Close" : "Menu"}
          </button>
          <h1 className="text-xl font-bold text-blue-900">Dashboard</h1>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-6">
          <h2 className="text-2xl font-bold text-blue-900">Welcome to the Dashboard</h2>
          <p className="mt-4 text-gray-700">
            This is your responsive dashboard layout. Use the sidebar to navigate
            between sections.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            
            <div className="p-4 bg-white shadow rounded-lg">Card 1</div>
            <div className="p-4 bg-white shadow rounded-lg">Card 2</div>
            <div className="p-4 bg-white shadow rounded-lg">Card 3</div>
          </div>

          <div className='mt-6'>
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
