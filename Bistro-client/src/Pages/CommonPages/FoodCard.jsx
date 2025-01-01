import React from 'react';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';
import {  useLocation, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useCart from '../../Hooks/useCart';
// import axios from 'axios';

const FoodCard = ({item}) => {
    const {name, image, price, recipe, _id} = item
    const {user} = useAuth();
    const navigate = useNavigate()
    const location = useLocation()
    const axiosSecure = useAxiosSecure()
    const [, refetch] = useCart()

    const handleAddtoCart = () => {
        if(user && user.email){
            const cartItem = {
                menuId : _id,
                email: user.email,
                name,
                image,
                price,

            }
            axiosSecure.post('/carts', cartItem)
            .then(res => {
                console.log(res.data);
                if(res.data.insertedId){
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `${name} Added to in your cart`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch()
                }
                
            })
        }
        else{
            Swal.fire({
                title: "You are not Logged In",
                text: "Please Login to add to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login it!"
              }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', {state: {from: location}})
                    
                }
            });
        }
        
    }

    return (
        <div>
            <div className="card card-compact bg-base-100 w-96 shadow-xl relative border">
                <figure>
                    <img
                    src={image}
                    alt="food" className='w-full' />
                </figure>
                <p className='absolute top-4 right-4 bg-orange-500 text-white px-4 py-2 rounded-md font-semibold'>$ {price}</p>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-center">
                        <div className='flex justify-center mt-10'>
                            <button onClick={handleAddtoCart} className="bg-gray-500 hover:bg-gray-950 border-b-4 border-orange-500 hover:text-orange-500  text-white py-2 px-4 rounded shadow">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;