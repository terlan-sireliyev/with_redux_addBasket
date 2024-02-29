import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "../features/style.module.css";
import { decrement, increment } from "../features/cardSlice";

const Checkout = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cart);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      totalPrice += item.price * item.count;
    });
    setTotalPrice(totalPrice);
  }, [cartItems]);

  const decrementBtn = (itemId) => {
    dispatch(decrement(itemId)); // Dispatching the decrement action with the itemId
  };
  const incrementBtn = (itemId) => {
    dispatch(increment(itemId)); // Dispatching the decrement action with the itemId
  };

  return (
    <>
      <div className="text-center text-2xl font-bold mt-4 flex justify-around">
        <div>Your general orders count: {cartItems.length}</div>
        <div>Total Price: {totalPrice}AZN</div>
      </div>
      <div className={styles.checkoutWrapp}>
        {cartItems.map((item) => (
          <div key={item.id} className="border border-600 relative">
            <div className="w-[295px] max-md:w-full h-64 p-2">
              <img src={item.thumbnail} className="w-full h-full" alt="sd" />
            </div>
            <p className="flex my-[3px]">
              <p className="ml-2 font-bold">Product name: </p>
              <p className="ml-2">{item.title.split("").slice(0, 15)}...</p>
            </p>
            <p className="flex my-[3px]">
              <h1 className="ml-2 text-left font-bold">Product price:</h1>
              <p className="ml-[5px]">{item.price}</p>
            </p>
            <div className="flex justify-between max-md:w-full max-md:absolute bottom-0 ">
              <button
                onClick={() => incrementBtn(item)}
                className="max-md:w-full  w-full border-t border-r border-gray px-8 py-2 mt-4"
              >
                -
              </button>
              <button className="max-md:w-full  w-full border-t border-gray px-8 py-2 mt-4">
                {item.count}
              </button>
              <button
                onClick={() => decrementBtn(item)}
                className="max-md:w-full w-full border-t border-l border-gray px-8 py-2 mt-4"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Checkout;
