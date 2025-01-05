import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./../../Hooks/useAxiosSecure";
import { FaCross, FaUsers } from "react-icons/fa6";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();

    const { data: users = [], refetch } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
        const res = await axiosSecure.get("/users");
        return res.data;
        },
    });

    // Make Admin 
    const handleMakeAdmin = user =>{
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res =>{
            console.log(res.data);
            refetch()
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${user.name} is an Admin Now`,
                showConfirmButton: false,
                timer: 1500
            });
            
        })
    }

    // Delete USer
    const handleDeleteUser = user =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You want to delete User",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
            }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${user._id}`)
                .then(res => {
                    console.log(res)
                    if(res.data.deletedCount > 0){
                        refetch()
                        Swal.fire({
                            title: "Deleted!",
                            text: "User has been deleted.",
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
      <div className="w-full text-2xl font-semibold text-center py-4">
        <h2 className="mb-2">Manage All Users</h2>
        <hr />
      </div>

      <div>
        <h2 className="mt-2 text-xl font-bold">Total Users: {users.length}</h2>

        <div className="overflow-x-auto mt-3">
            <table className="table">
                {/* head */}
                <thead className="bg-blue-800 text-white">
                    <tr>
                        <th>Sl</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {users.map((user, index) => (
                        <tr key={user._id}>
                            <td>{index + 1}</td>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                            src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                            alt="Avatar Tailwind CSS Component"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{user.name}</div>
                                    </div>
                                </div>
                            </td>

                            <td>
                                {user.email}
                            </td>

                            <td>
                                {user.role === 'admin' ? 'Admin' : <button onClick={()=> handleMakeAdmin(user)} className="btn bg-blue-800 text-white hover:bg-black btn-md text-lg"> <FaUsers></FaUsers> </button>}
                            </td>
                            <th>
                                <button onClick={()=> handleDeleteUser(user)} className="btn bg-red-600 text-white hover:bg-black btn-md text-lg"> <FaTrashAlt></FaTrashAlt> </button>
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

export default AllUsers;
