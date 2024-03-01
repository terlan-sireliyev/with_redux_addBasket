import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "../features/style.module.css";
import { decrement, increment, deleteFunc } from "../features/cardSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const CheckOutDesktop = () => {
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
    dispatch(increment(itemId)); // Dispatching the increment action with the itemId
  };
  const deleteBtn = (itemId) => {
    dispatch(deleteFunc(itemId)); // Dispatching the delete action with the itemId
  };

  return (
    <>
      <div className="text-center  text-2xl font-bold mt-4 flex justify-around">
        <div>Your general orders count: {cartItems.length}</div>
        <div>Total Price: {totalPrice}AZN</div>
      </div>
      <div className="w-1/2 flex flex-col m-auto max-md:w-full max-md:px-2">
        <div className="w-full my-4">
          <ul className=" w-full flex  rounded ">
            <div className="w-1/2 text-left ">Image</div>
            <div className="w-1/2 text-left pl-3 ">Product</div>
            <div className="w-1/2 text-left ">Price</div>
            <div className="w-1/2 text-left ">Total</div>
            <div className="w-1/2 text-left ">QTY</div>
            <div className="w-1/2 text-center ">Action</div>
          </ul>
        </div>
        {cartItems.map((item) => (
          <div className="flex  justify-between items-center  ">
            <div
              key={item.id}
              className="border border-600 h-1/2  flex justify-between rounded hover:bg-gray-200 items-center  mb-4"
            >
              <div className="w-1/2 h-full">
                <img src={item.thumbnail} className=" h-full" alt="sd" />
              </div>
              <div className="w-1/2   pl-3">
                <h1 className="text-[14px]">
                  <strong>{item.title.split("").slice(0, 13)}...</strong>
                </h1>
                <p className="text-[12px] mt-2">quantity: {item.quantity}</p>
              </div>
              <div className="w-1/2">{item.price}</div>
              <div className="w-1/2 ">
                <div>{item.price * item.count}</div>
              </div>
              <div className="w-1/2 flex items-center">
                <button
                  onClick={() => incrementBtn(item)}
                  className="max-md:w-full px-[9.2px] py-2 "
                >
                  -
                </button>
                <button className="max-md:w-full px-[9.2px] py-2">
                  {item.count}
                </button>
                <button
                  onClick={() => decrementBtn(item)}
                  className="max-md:w-full px-[9.2px] py-2"
                >
                  +
                </button>
              </div>
            </div>
            <div className="w-[145px]  flex justify-center ">
              <div
                className=" rounded-full bg-gray-200 hover:bg-gray-400 cursor-pointer mt-[-10px]  p-2 h-[30px] w-[30px] flex justify-center items-center"
                onClick={() => deleteBtn(item)}
              >
                <FontAwesomeIcon icon={faTrash} className="h-full w-full" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CheckOutDesktop;