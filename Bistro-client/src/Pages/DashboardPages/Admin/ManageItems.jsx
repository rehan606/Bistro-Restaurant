import React from 'react';
import SectionTitle from '../../CommonPages/SectionTitle';
import useMenu from '../../../Hooks/useMenu';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { Link } from 'react-router-dom';

const ManageItems = () => {
    const [menu, loading, refetch] = useMenu()
    const axiosSecure = useAxiosSecure()

    const handleDeleteUser =  (item) =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${item._id}`)
                if(res.data.deletedCount > 0){
                    refetch()
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `${item.name} delete Successfully`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }
        });
    }
    return (
        <div>
            <SectionTitle headding="Hurry Up" subHeadding="Manage Items"></SectionTitle>

            <div>
                {/* Table  */}
                
                <div className="overflow-x-auto ">
                    <table className="table table-zebra mt-7 ">
                        {/* head */}
                        <thead className="py-4 bg-blue-800 text-white">
                            <tr>
                                <th>#</th>
                                <th>Item Image and name</th>
                                <th>Price</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>

                        <tbody>
                            {menu.map((item, index) => (
                                <tr key={item._id}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                    src={item.image}
                                                    alt="Avatar Tailwind CSS Component"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{item.name}</div>
                                            </div>
                                        </div>
                                    </td>
        
                                    
                                    <td className="font-bold">
                                        $ {item.price}
                                    </td>
        
                                    
                                    <th>
                                        <Link to={`/dashboard/updateItem/${item._id}`}> 
                                            <button  className="btn bg-green-400 text-white hover:bg-black btn-md text-lg"> <FaEdit></FaEdit> </button>
                                        </Link>
                                    </th>
                                    <th>
                                        <button onClick={()=> handleDeleteUser(item)} className="btn bg-red-600 text-white hover:bg-black btn-md text-lg"> <FaTrashAlt></FaTrashAlt> </button>
                                    </th>
                                </tr>
                            ) )}
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageItems;