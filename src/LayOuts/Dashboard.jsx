import {
  FaAddressBook,
  FaBook,
  FaCalendar,
  FaDAndD,
  FaHome,
  FaInbox,
  FaLine,
  FaRegUser,
  FaShoppingCart,
  FaStar,
  FaUtensils,
} from "react-icons/fa";
import { FaShop } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import { HiOutlineMenu } from "react-icons/hi";

const Dashboard = () => {
  const isAdmin = true;
  const [cart] = useCart();
  return (
    <div className="flex">
      {/* sidebar */}
      <div className="w-72 px-2 min-h-screen bg-orange-300">
        <h1 className="text-5xl text-center font-semibold mt-7">
          Bistro Boss <br /> Restaurant
        </h1>
        {isAdmin ? (
          <>
            <ul className="menu space-y-3 mt-12">
              <li>
                <NavLink className="uppercase" to="/dashboard/adm-home">
                  <FaHome />
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink className="uppercase" to="/dashboard/adm-addItem">
                  <FaUtensils />
                  Add Item
                </NavLink>
              </li>
              <li>
                <NavLink className="uppercase" to="/dashboard/adm-manageItem">
                  <HiOutlineMenu />
                  Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="uppercase"
                  to="/dashboard/adm-manageBookings"
                >
                  <FaAddressBook />
                  manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink className="uppercase" to="/dashboard/adm-allUser">
                  <FaRegUser />
                  all users
                </NavLink>
              </li>
            </ul>
          </>
        ) : (
          <>
            <ul className="menu space-y-3 mt-12">
              <li>
                <NavLink className="uppercase" to="/dashboard/cart">
                  <FaHome />
                  User Home
                </NavLink>
              </li>
              <li>
                <NavLink className="uppercase" to="/dashboard/cart">
                  <FaCalendar />
                  Reservation
                </NavLink>
              </li>
              <li>
                <NavLink className="uppercase" to="/dashboard/cart">
                  <FaDAndD />
                  payment history
                </NavLink>
              </li>
              <li>
                <NavLink className="uppercase" to="/dashboard/cart">
                  <FaShoppingCart></FaShoppingCart>
                  My Cart {cart.length}
                </NavLink>
              </li>
              <li>
                <NavLink className="uppercase" to="/dashboard/cart">
                  <FaStar />
                  Add Review
                </NavLink>
              </li>
              <li>
                <NavLink className="uppercase" to="/dashboard/cart">
                  <FaBook />
                  my bookings
                </NavLink>
              </li>
            </ul>
          </>
        )}
        <div className="divider "></div>
        <ul className="menu ">
          <li>
            <NavLink className="uppercase" to="/">
              <FaHome />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="uppercase" to="/">
              <FaLine />
              menu
            </NavLink>
          </li>
          <li>
            <NavLink className="uppercase" to="/">
              <FaShop />
              shop
            </NavLink>
          </li>
          <li>
            <NavLink className="uppercase" to="/">
              <FaInbox />
              Contact
            </NavLink>
          </li>
        </ul>
      </div>

      {/* dashboard content */}
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
