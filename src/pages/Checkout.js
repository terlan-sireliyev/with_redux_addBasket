import React from "react";
import { useSelector } from "react-redux";
import styles from "../features/style.module.css";
import { useDispatch } from "react-redux";
import { decrement } from "../features/cardSlice";
const Checkout = () => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart.cart);
  const value = useSelector((state) => {
    return state.counter.value;
  });
  
  const decrementBtn = (item, action) => {
    dispatch(decrement())
    console.log(dispatch(decrement()))
    // console.log()
  };
  
  return (
    <>
      <div className="text-center text-2xl font-bold mt-4">
        Your general orders {cartItem.length}
      </div>
      <div className={styles.checkoutWrapp}>
        {cartItem.map((item) => {
          return (
            <>
              <div className="border border-600">
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
                <div className="flex justify-between">
                <button  onClick={() => decrementBtn(item)} className="w-full border-t border-r border-gray px-8 py-2 mt-4">-</button>
                <button className="w-full border-t  border-gray px-8 py-2 mt-4">{value}</button>
                <button className="w-full border-t border-l border-gray px-8 py-2 mt-4">+</button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Checkout;
