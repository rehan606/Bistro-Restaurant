import React, { useState } from 'react';
import {  FaBook, FaHome,  FaShoppingCart,  FaUsers, FaUtensils, } from 'react-icons/fa';
import { FaCalendar, FaComment, FaGear, FaList, FaOutdent,  FaUser, FaWallet } from 'react-icons/fa6';
import {  Link, NavLink, Outlet } from 'react-router-dom';
import useCart from '../Hooks/useCart';
import useAdmin from '../Hooks/useAdmin';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [cart] = useCart()

  const [isAdmin] = useAdmin();

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-blue-900 text-white transform transition-transform duration-300 lg:static lg:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 text-xl font-bold border-b border-blue-700">Dashboard  </div>
        <div className='text-center py-4 bg-white text-blue-800'><Link to='/'> Home Page</Link></div>
        <nav className="p-4">
          <ul className="space-y-4">
            
            {
              isAdmin ? <>
                {/* Admin Menu Items */}
                <li className='flex items-center gap-3'>
                  <NavLink to="/dashboard/adminHome" className="flex items-center gap-4 w-full p-2 rounded hover:bg-blue-700">
                  <FaHome></FaHome> Admin Home</NavLink>
                </li>
                
                <li className='flex items-center gap-3'>
                  <NavLink to="/dashboard/addItem" className="flex items-center gap-4 w-full p-2 rounded hover:bg-blue-700">
                  <FaUtensils></FaUtensils> Add Item</NavLink>
                </li>

                <li className='flex items-center gap-3'>
                  <NavLink to="/dashboard/manageItems" className="flex items-center gap-4 w-full p-2 rounded hover:bg-blue-700">
                  <FaList></FaList> Manage Items</NavLink>
                </li>

                <li className='flex items-center gap-3'>
                  <NavLink to="/dashboard/manageBookings" className="flex items-center gap-4 w-full p-2 rounded hover:bg-blue-700">
                  <FaBook></FaBook> Manage Bookings</NavLink>
                </li>

                <li className='flex items-center gap-3'>
                  <NavLink to="/dashboard/users" className="flex items-center gap-4 w-full p-2 rounded hover:bg-blue-700">
                  <FaUsers></FaUsers> All Users</NavLink>
                </li>
              </> 
              : 
              
              <>
                {/* User Menu Items */}
                <li className='flex items-center gap-3 '>
                  <NavLink to="/" className="flex items-center gap-4 w-full p-2 rounded hover:bg-blue-700">
                  <FaHome></FaHome> Home</NavLink>
                </li>

                <li className='flex items-center gap-3'>
                  <NavLink to="/dashboard/cart" className="flex items-center gap-4 w-full p-2 rounded hover:bg-blue-700">
                  <FaShoppingCart></FaShoppingCart> Cart  ({cart.length})</NavLink>
                </li>
              
                <li className='flex items-center gap-3'>
                  <NavLink to="/dashboard/reservation" className="flex items-center gap-4 w-full p-2 rounded hover:bg-blue-700">
                  <FaCalendar></FaCalendar> Reservation</NavLink>
                </li>

                <li className='flex items-center gap-3'>
                  <NavLink to="/dashboard/payment" className="flex items-center gap-4 w-full p-2 rounded hover:bg-blue-700">
                  <FaWallet></FaWallet> Payment History</NavLink>
                </li>

                <li className='flex items-center gap-3'>
                  <NavLink to="/dashboard/review" className="flex items-center gap-4 w-full p-2 rounded hover:bg-blue-700">
                  <FaComment></FaComment> Add Review</NavLink>
                </li>

                <li className='flex items-center gap-3'>
                  <NavLink to="/dashboard/booking" className="flex items-center gap-4 w-full p-2 rounded hover:bg-blue-700">
                  <FaList></FaList> My Bookings</NavLink>
                </li>
              </>
            }


            {/* Profile Settings  */}
            <div className=''><hr /></div>

            

            <li className='flex items-center gap-3'>
              <NavLink to="/dashboard/profile" className="flex items-center gap-4 w-full p-2 rounded hover:bg-blue-700">
              <FaUser></FaUser> Profile </NavLink>
            </li>

            <li className='flex items-center  gap-3'>
              <NavLink to="/dashboard/settings" className=" w-full p-2 flex items-center gap-4 rounded hover:bg-blue-700">  <FaGear></FaGear> Settings</NavLink>
            </li>

            <li className='flex items-center gap-3'>
              <NavLink to="/dashboard/cart" className=" w-full p-2 flex items-center gap-4 rounded hover:bg-blue-700"> <FaOutdent></FaOutdent> Logout</NavLink>
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
        <div className="flex-1 p-6 overflow-y-scroll">
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
