import React from 'react';
import useAdmin from '../Hooks/useAdmin';
import useAuth from '../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRoute = ({children}) => {
    const {user , loading} = useAuth()
    const [isAdmin, isAdminLoading] = useAdmin()
   
    const location= useLocation()

    if(loading || isAdminLoading){
        return <div className='w-full flex justify-center items-center h-screen'><progress className='progress w-56 bg-blue-800'></progress></div>
    }

    if(user && isAdmin) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default AdminRoute;