import { FaHome } from "react-icons/fa";
import { FaCartShopping, FaHeart } from "react-icons/fa6";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { useAppSelector } from "../Store/Store";

const NavBar = () => {
  const cartItems = useAppSelector((state) => state.CartProducts);
  const wishItems = useAppSelector((state) => state.WishProducts);
  return (
    <nav className="z-10 sticky top-0 bg-gray-200 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <div className="contain flex flex-col justify-between items-center py-2 sm:flex-row">
        <Link to="/" className="logo font-bold text-2xl text-blue-900">
          Furnitures House
        </Link>
        <ul className="text-[14px] flex justify-between gap-0 lg:gap-8 font-bold border-t-1 sm:border-none">
          <li>
            <Link
              className="py-2 px-1 sm:px-4 flex items-center gap-1 hover:text-gray-600 smooth"
              to="/home"
            >
              Home
              <span>
                <FaHome />
              </span>
            </Link>
          </li>
          <li>
            <Link
              className="py-2 px-1 sm:px-4 flex items-center gap-1 hover:text-gray-600 smooth"
              to="/shop"
            >
              Shop
              <span>
                <HiMiniShoppingBag />
              </span>
            </Link>
          </li>
          <li>
            <Link
              className=" py-2 px-1 sm:px-4 flex items-center gap-1 hover:text-gray-600 smooth"
              to="/cart"
            >
              Cart
              <span className="relative">
                <FaCartShopping />
                {cartItems.length > 0 ? (
                  <span className="absolute -top-3 left-4 px-1 text-white bg-blue-700 rounded-full block">
                    {cartItems.length}
                  </span>
                ) : null}
              </span>
            </Link>
          </li>
          <li>
            <Link
              className="py-2 px-1 sm:px-4  flex items-center gap-1 hover:text-gray-600 smooth"
              to="/wishlist"
            >
              Wishlist
              <span className="relative">
                <FaHeart />
                {wishItems.length > 0 ? (
                  <span className="absolute -top-3 left-4 px-1 text-white bg-blue-700 rounded-full block">
                    {wishItems.length}
                  </span>
                ) : null}
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
