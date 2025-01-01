import React from "react";
import useCart from "../../Hooks/useCart";
import { IoTrashBin } from "react-icons/io5";

const Cart = () => {
  const [cart] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  return (
    <div>
        <div className="flex justify-between items-center bg-white pl-4">
            <h2 className="text-lg font-semibold">Items: {cart.length} </h2>
            <h2 className="text-lg font-semibold">Total Price: {totalPrice} </h2>
            <button className="btn px-10 bg-blue-800 text-white hover:bg-black">
            Payment
            </button>
        </div>

        {/* Table  */}

        <div className="overflow-x-auto">
            <table className="table table-zebra mt-7">
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
                            <td ><button className="btn  bg-red-500"> <IoTrashBin /></button></td>
                        </tr>)
                    }
                    
                </tbody>
            </table>
        </div>
    </div>
  );
};

export default Cart;
