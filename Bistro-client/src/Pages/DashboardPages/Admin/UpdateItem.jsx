import React from "react";
import SectionTitle from "../../CommonPages/SectionTitle";
import { useLoaderData } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { FaUtensils } from "react-icons/fa6";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const UpdateItem = () => {
    const {register,  handleSubmit, reset, } = useForm()
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()

    const {name, recipe, category, price, _id} = useLoaderData();
    

    const onSubmit = async (data) => {
        console.log(data)
        const imageFile = {image: data.image[0]}
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        console.log(res.data);

        if(res.data.success){
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
                
            }

            const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem)
            console.log(menuRes.data);
            
            if(menuRes.data.modifiedCount > 0){
                reset()
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `${data.name} Update Successfully`,
                    showConfirmButton: false,
                    timer: 1500
                });
                
            }
        }
    };


    return (
        <div>

            <SectionTitle headding="Update Info"  subHeadding="Update Item"  ></SectionTitle>

            <div>

                <div className="w-6/12 mx-auto bg-gray-200 p-10 mt-10">

                
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label className="form-control w-full mb-4">
                        <div className="label">
                            <span className="label-text">Recipe Name</span>
                        </div>
                        <input
                            {...register("name", { required: true })}
                            required
                            type="text"
                            defaultValue={name}
                            placeholder="Recipe Name"
                            className="input input-bordered w-full"
                        />
                        </label>

                        <div className="flex gap-4">
                        <label className="form-control w-full mb-4">
                            <div className="label">
                            <span className="label-text">Category</span>
                            </div>
                            <select
                            defaultValue={category}
                            // defaultValue='default'
                            {...register("category", { required: true })}
                            className="select select-bordered w-full max-w-xs"
                            >
                            <option disabled selected value="default">
                                Select Category
                            </option>
                            <option value="salad">Salad</option>
                            <option value="fizza">Fizza</option>
                            <option value="soup">Soup</option>
                            <option value="dessert">Dessert</option>
                            <option value="drink">Drinks</option>
                            </select>
                        </label>

                        <label className="form-control w-full mb-4">
                            <div className="label">
                            <span className="label-text">Price</span>
                            </div>
                            <input
                            {...register("price")}
                            type="text"
                            defaultValue={price}
                            placeholder="Price"
                            className="input input-bordered w-full"
                            />
                        </label>
                        </div>

                        {/* Text area  */}
                        <label className="form-control">
                        <div className="label">
                            <span className="label-text">Recipe Details</span>
                        </div>
                        <textarea
                            defaultValue={recipe}
                            {...register("recipe")}
                            className="textarea textarea-bordered h-24"
                            placeholder="Recipe Details"
                        ></textarea>
                        </label>

                        <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Upload Recipe Image</span>
                        </div>
                        <input
                            {...register("image", { required: true })}
                            type="file"
                            className="file-input file-input-bordered w-full max-w-xs"
                        />
                        </label>

                        {/* {errors.exampleRequired && <span>This field is required</span>} */}

                        <button
                        type="submit"
                        className="w-full btn flex items-center text-center py-4 bg-blue-800 hover:bg-gray-900 text-white rounded-md mt-5"
                        >
                        Update Item <FaUtensils />{" "}
                        </button>
                    </form>


                </div>

            </div>

        </div>
    );
};

export default UpdateItem;
