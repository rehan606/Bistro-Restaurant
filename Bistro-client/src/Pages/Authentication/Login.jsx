import React, { useContext, useEffect, useState } from "react";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha, } from 'react-simple-captcha';
import { AuthContext } from "../../Providers/AuthProviders";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import SocialLogin from "../../Components/SocialLogin";

const Login = () => {

    const [disable, setDisable] = useState(true)
    const {signInUser} = useContext(AuthContext)
    const navigate = useNavigate()
    const location  = useLocation()
    const from = location.state?.from?.pathname || "/" ;

    useEffect(() => {
        loadCaptchaEnginge(6); 
    }, [])

    const handleLogin =  (e) => {
        e.preventDefault()

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const user = {email, password}
        console.log(user);

        signInUser(email, password )
        .then(result => {
            const user = result.user
            console.log(user);
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Login Successfully",
                showConfirmButton: false,
                timer: 1500
            });
            navigate(from , { replace: true});
        })
        
    }

    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        if(validateCaptcha(user_captcha_value)){
            setDisable(false)
        }
        
    };


    return (
        <div>
            <Helmet>
                <title>Login | Bistro-Resturant</title>
            </Helmet>
            <div className="hero bg-base-200 min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse w-11/12 mx-auto">
                <div className="text-center lg:text-left w-6/12">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
                    excepturi exercitationem quasi. In deleniti eaque aut repudiandae
                    et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm  shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                            <span className="label-text">Email</span>
                            </label>
                            <input
                            type="email"
                            name="email"
                            placeholder="email"
                            className="input input-bordered"
                            required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                            <span className="label-text">Password</span>
                            </label>
                            <input
                            type="password"
                            name="password"
                            placeholder="password"
                            className="input input-bordered"
                            required
                            />
                            <label className="label">
                            <a href="#" className="label-text-alt link link-hover">
                                Forgot password?
                            </a>
                            </label>
                        </div>
                        {/* captcha  */}
                        <div className="form-control">
                            <label className="label">
                            <LoadCanvasTemplate />
                            </label>

                            <input
                            type="text"
                            name="captcha"
                            onBlur={handleValidateCaptcha} 
                            
                            placeholder="Type Captcha"
                            className="input input-bordered"
                            required
                            />
                            {/* <button className="btn btn-outline btn-xs mt-4">Validate Captcha</button> */}
                            
                        </div>
                        <div className="form-control mt-6">
                            <button disabled={disable} className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className='text-center pb-5'> <small >New Here ? <Link to='/signUp' className='text-blue-500'>Create an Account</Link> </small> </p>

                    <div >
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
