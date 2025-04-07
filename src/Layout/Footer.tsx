import { FaFacebook, FaRegCopyright } from "react-icons/fa";
import { FaSquareInstagram, FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import payImg from "/public/assets/card.png";
const Footer = () => {
  return (
    <section className="py-8 bg-white border-t-1 border-blue-600">
      <div className="contain flex justify-between gap-6 flex-col sm:flex-row">
        <div className="w-full sm:w-2/5">
          <Link to="/" className="logo font-bold text-2xl  text-blue-900">
            Furnitures House
          </Link>
          <p className="text-sm text-gray-700 italic py-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            iste, tempore rem dignissimos possimus quam harum at est animi
            voluptatum ratione expedita blanditiis quae, reiciendis illo quod ut
            minus. Quia!
          </p>
        </div>
        <div className="links-terms flex justify-between sm:w-3/5">
          <div className=" ">
            <h2 className="font-bold text-gray-800 text-xl mb-1">
              Quick Links
            </h2>
            <ul>
              <li>
                <Link
                  className=" font-bold w-fit py-1 pr-3 block hover:text-gray-600 smooth "
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className=" font-bold w-fit py-1 pr-3 block hover:text-gray-600 smooth"
                  to="/shop"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  className=" font-bold w-fit py-1 pr-3 block hover:text-gray-600 smooth"
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className=" font-bold w-fit py-1 pr-3 block hover:text-gray-600 smooth"
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="">
            <div className="Terms">
              <h2 className="font-bold text-gray-800 text-xl mb-1">
                Terms & Conditions
              </h2>
              <ul>
                <li>
                  <Link
                    className="w-fit py-1 pr-3 block hover:text-gray-600 smooth "
                    to="/"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    className="w-fit py-1 pr-3 block hover:text-gray-600 smooth"
                    to="/"
                  >
                    Terms of Use
                  </Link>
                </li>
              </ul>
            </div>
            <div className="Social mt-3">
              <h2 className="font-bold text-gray-800 text-xl mb-2">
                Social Media
              </h2>
              <ul className="flex items-center justify-start gap-4 text-2xl">
                <li>
                  <FaFacebook className="text-blue-900 cursor-pointer hover:text-blue-700 smooth" />
                </li>
                <li>
                  <FaSquareInstagram className="text-blue-900 cursor-pointer hover:text-blue-700 smooth" />
                </li>
                <li>
                  <FaSquareXTwitter className="text-balck cursor-pointer hover:text-gray-700 smooth" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="contain text-center py-3">
        <img
          className="max-w-lg w-full mx-auto"
          src={payImg}
          alt="Payment Card"
        ></img>
        <h2 className="mt-3 text-sm sm:text-lg text-blue-900 font-bold flex-center gap-2">
          <FaRegCopyright />
          All Rights Reserved: Furnitures 2025
        </h2>
      </div>
    </section>
  );
};

export default Footer;
