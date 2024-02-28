import React from "react";
import { useSelector } from "react-redux";
import styles from "../features/style.module.css";
const Checkout = () => {
  const cartItem = useSelector((state) => state.cart.cart);
  return (
    <>
      <div className="text-center text-2xl font-bold mt-4">
        Your general orders {cartItem.length}
      </div>
      <div className={styles.checkoutWrapp}>
        {cartItem.map((item) => {
          return (
            <>
              <div className={styles.cardOne}>
                <div className="w-[295px] h-64 p-2">
                  <img
                    src={item.thumbnail}
                    className="w-full h-full"
                    alt="sd"
                  />
                </div>
                <p className="flex my-[3px]">
                  <p className=" ml-2  font-bold">Prdocust name: </p>
                  <p className="ml-2">{item.title.split("").slice(0, 15)}...</p>
                </p>
                <p className="flex  my-[3px]">
                  <h1 className=" ml-2 text-left font-bold">Product price:</h1>
                  <p className="ml-[5px]">{item.price}</p>
                </p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Checkout;
