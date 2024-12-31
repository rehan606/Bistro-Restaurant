import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Providers/AuthProviders";


const SignUp = () => {
    const {register, handleSubmit, watch, formState: { errors }, } = useForm()
    const {createUser} = useContext(AuthContext)

    const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password)
        .then(result => {
            const loggedUser = result.user 
            console.log(loggedUser);
            
        })
    }
    console.log(watch("example"))


    return (
        <div>
            <Helmet>
                <title>SignUp | Bistro-Resturant</title>
            </Helmet>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left w-6/12">
                    <h1 className="text-5xl font-bold">Register Now!</h1>
                    <p className="py-6">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
                    excepturi exercitationem quasi. In deleniti eaque aut repudiandae
                    et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm  shadow-2xl">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                            <span className="label-text">Name</span>
                            </label>
                            <input
                            type="name"
                            {...register("name", { required: true })}
                            name="name"
                            placeholder="Enter Your Name"
                            className="input input-bordered"
                            // required
                            />
                            {errors.name && <span className="text-red-500">Name is required</span>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                            <span className="label-text">Email</span>
                            </label>
                            <input
                            type="email"
                            {...register("email", { required: true })}
                            name="email"
                            placeholder="Enter Your Email"
                            className="input input-bordered"
                            // required
                            />
                            {errors.email && <span className="text-red-500">Email is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                            <span className="label-text">Password</span>
                            </label>
                            <input
                            type="password"
                            {...register("password",  { 
                                required: true, 
                                pattern: /(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/ })}
                            name="password"
                            placeholder="password"
                            className="input input-bordered"
                            
                            />
                            {errors.password && <span className="text-red-500">Password is required</span>}

                            {errors.password && <span className="text-red-500">Password must be at least 8 characters long, include a letter, a number, and a special character.</span>}
                            <label className="label">
                            <a href="#" className="label-text-alt link link-hover">
                                Forgot password?
                            </a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">SignUp</button>
                        </div>
                    </form>
                    <p className='text-center pb-5'> <small >Already Have an Account ? <Link to='/login' className='text-blue-500'>Login</Link> </small> </p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
