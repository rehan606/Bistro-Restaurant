import React from "react";
import useCart from "../../Hooks/useCart";
import { IoTrashBin } from "react-icons/io5";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const axiosSecure = useAxiosSecure()

  const handleDelete = id => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
            axiosSecure.delete(`/carts/${id}`)
            .then(res => {
               console.log(res)
               if(res.data.deletedCount > 0){
                    refetch()
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your Item has been deleted.",
                        icon: "success"
                    });
               }
            })
        //   
        }
    });
  }
  return (
    <div>
        <div className="flex justify-between items-center bg-white pl-4 py-1 rounded-lg">
            <h2 className="text-lg font-semibold">Items: {cart.length} </h2>
            <h2 className="text-lg font-semibold">Total Price: {totalPrice} </h2>
            { cart.length ?  <Link to='/dashboard/payment'>
                <button className="btn px-10 bg-blue-800 text-white hover:bg-black ">
                Payment
                </button> 
            </Link> :  <button disabled className="btn px-10 bg-blue-800 text-white hover:bg-black ">
                Payment
                </button> }
        </div>

        {/* Table  */}

        <div className="overflow-x-auto ">
            <table className="table table-zebra mt-7 ">
                {/* head */}
                <thead className="py-4 bg-blue-800 text-white">
                    <tr>
                    <th></th>
                    <th>Item Image</th>
                    <th>Item Name</th>
                    <th>Price</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        cart.map((item, index) => <tr key={item._id}>
                            <th>{index + 1}</th>
                            <td><img src={item.image} alt="" className="w-12 h-12 rounded-md border border-gray-500" /></td>
                            <td className="font-semibold">{item.name}</td>
                            <td className="font-semibold">{item.price}</td>
                            <td ><button onClick={() => handleDelete(item._id)} className="btn  bg-red-500"> <IoTrashBin /></button></td>
                        </tr>)
                    }
                    
                </tbody>
            </table>
        </div>
    </div>
  );
};

export default Cart;
