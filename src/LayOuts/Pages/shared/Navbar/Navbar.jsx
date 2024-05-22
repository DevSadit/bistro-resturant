import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const navLinks = (
    <>
      <Link to="/menu">
        <li>
          <a>Our Menu</a>
        </li>
      </Link>
      <Link to="/order/salads">
        <li>
          <a>Our Shop</a>
        </li>
      </Link>

      {user ? (
        <button onClick={logOut} className="btn btn-outline btn-primary">
          LogOut
        </button>
      ) : (
        <Link to="/login">
          <li>
            <a>LogIn</a>
          </li>
        </Link>
      )}
    </>
  );
  return (
    <div className="navbar fixed top-0 right-0 z-50 bg-gray-600 bg-opacity-30">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          Bistro
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end gap-x-5">
        {
          user && <p className="font-bold text-red-600">{user.displayName}</p>
        }
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
