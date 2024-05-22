import { useContext } from "react";
import { AuthContext } from "../../../../provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const FoodCard = ({ item }) => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  // console.log(item);
  const { name, price, image, _id } = item;

  const handleAddToCart = () => {
    // console.log(food, user?.email);
    const cartData = {
      menuId: _id,
      usrEmail: user.email,
      name,
      image,
      price,
    };
    if (user) {
      // send ccart item data to data base
      axiosSecure
        .post("/carts", cartData)
        .then((result) => {
          console.log(result);
          if (result.data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${name} has been added`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      Swal.fire({
        title: "Please Login First!",
        text: "login to add the cart to your wishlist",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          // send the user to the login page
          navigate("/login");
        }
      });
    }
  };

  return (
    <div className="w-full overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <img className="object-cover w-full h-56" src={image} alt="avatar" />

      <div className="py-5 text-center">
        <a
          href="#"
          className="block text-xl font-bold text-gray-800 dark:text-white"
          role="link"
        >
          {name}
        </a>
        <span className="text-sm text-gray-700 dark:text-gray-200 px-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
          voluptatibus.
        </span>
      </div>
      <div className="mb-3 text-center">
        <button
          onClick={() => {
            handleAddToCart(item);
          }}
          className="btn btn-outline border-0 border-orange-500 hover:bg-orange-600 hover:border-b-0 border-b-4 mt-3"
        >
          Add To Card
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
