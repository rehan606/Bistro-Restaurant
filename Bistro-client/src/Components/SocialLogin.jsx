import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import useAuth from '../Hooks/useAuth';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import useAxiosPublic from '../Hooks/useAxiosPublic';

const SocialLogin = () => {
    const {googleSignIn} = useAuth()
    const navigate = useNavigate()
    const axiosPublic = useAxiosPublic()

    const handleGoogleSignIn =() =>{
        googleSignIn()
        .then(result => {
            const userInfo = {
                name: result.user?.email,
                email: result.user?.displayName,
            }
            axiosPublic.post('/users', userInfo)
            .then(res => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Successfully SignIn With Google",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/')
            })

            
        })
    }
    return (
        <div className='px-6 pb-4'>
            <div className=''></div>
            <div className='divider'>or</div>
            <div className=''></div>
            <button onClick={handleGoogleSignIn} className=" w-full bg-red-600 rounded-md flex items-center justify-center py-3 text-white gap-4">
                <FaGoogle></FaGoogle>
                <span className="">SignIn With Google</span>
            </button>
        </div>
    );
};

export default SocialLogin;