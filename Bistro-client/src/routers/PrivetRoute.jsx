import React, { useContext,  } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { Navigate, useLocation,  } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';


const PrivetRoute = ({children}) => {

    // const {user, loading} = useContext(AuthContext)
    const {user, loading} = useAuth()
    const location= useLocation()

    if(loading){
        return <div className='w-full flex justify-center items-center h-screen'><progress className='progress w-56 bg-blue-800'></progress></div>
    }

    if(user) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivetRoute;