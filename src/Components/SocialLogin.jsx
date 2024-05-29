import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../hooks/useAxiosPublic";

const SocialLogin = () => {
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const { handleGoogleLogin } = useContext(AuthContext);

  const googleLogin = () => {
    handleGoogleLogin()
    .then((result) => {
      console.log(result.user);
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        navigate("/");
      });
    });
  };
  return (
    <div
      onClick={googleLogin}
      className="flex mt-5 border cursor-pointer gap-x-4 items-center border-black p-2 rounded-lg px-12 py-2"
    >
      <FaGoogle className="w-8 h-8" />
      <p className="text-lg font-bold">Sign in With Google</p>
    </div>
  );
};

export default SocialLogin;
