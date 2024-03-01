import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Layout = () => {
  const cartItem = useSelector((state) => state.cart.cart);
  return (
    <div className="fixed flex items-center justify-center  z-20 top-[-16px] h-16 w-full bg-gray-600 ">
      <nav className=" text-white   w-full flex gap-4  justify-center items-center mt-4">
        <Link to="/">Home</Link>
        <Link to="/checkout" className="flex">
          Basket <p className="font-bold ml-[3px]">({cartItem.length})</p>
        </Link>
      </nav>
    </div>
  );
};

export default Layout;
