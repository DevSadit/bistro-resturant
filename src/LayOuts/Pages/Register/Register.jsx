import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const { creatUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    creatUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      //   console.log(loggedUser);
      // if succesfully sign in user
      updateUserProfile(data.name, data.photoUrl)
        .then(() => {
          //   console.log(`user profile info updated!`);
        })
        .catch((error) => {
          console.log(error);
        });
    });
    reset();
    navigate("/");
  };

  //   console.log(watch("example"));

  // creatUser(data.email, data.password).then((result) => {
  //   // console.log(result.user);
  //   updateUserProfile(data.name, data.photoUrl)
  //     .then(() => {
  //       reset();
  //       console.log(`user profile info updated`);
  //       navigate("/");
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // });
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
