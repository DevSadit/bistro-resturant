import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { FaGoogle } from "react-icons/fa";
import SocialLogin from "../../../Components/SocialLogin";

const Register = () => {
  
  const axiosPublic = useAxiosPublic();
  const { creatUser, updateUserProfile, } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    creatUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      // console.log(loggedUser);
      // if succesfully sign in user
      updateUserProfile(data.name, data.photoUrl);

      const userInfo = {
        name: data.name,
        email: data.email,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        if (res.data.inseredId) {
          console.log(`user added to data base`);
          reset();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "You Account Created Succesfuly",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });

      // console.log(`user profile info updated!`);

      navigate("/");
    });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign Up now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="name"
                className="input input-bordered"
              />
              {errors.name && (
                <span className="text-red-600">name is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder="email"
                className="input input-bordered"
              />
              {errors.email && (
                <span className="text-red-600">Email is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">PhotoUrl</span>
              </label>
              <input
                {...register("photoUrl", { required: true })}
                type="photoUrl"
                placeholder="PhotoUrl"
                className="input input-bordered"
              />
              {errors.photoUrl && (
                <span className="text-red-600">photo url is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password", { required: true })}
                type="password"
                placeholder="password"
                className="input input-bordered"
              />
              {errors.password && (
                <span className="text-red-600">password is required</span>
              )}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-primary"
                type="submit"
                value="sign up"
              />
            </div>
<SocialLogin></SocialLogin>
            <p>
              go to{" "}
              <Link
                className="text-blue-600 font-bold hover:underline"
                to="/login"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
      <Helmet>
        <title>Sign Up| Bistro</title>
      </Helmet>
    </div>
  );
};

export default Register;
