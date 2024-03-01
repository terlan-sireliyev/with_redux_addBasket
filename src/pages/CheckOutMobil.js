import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import styles from "../features/style.module.css";
import { decrement, increment, deleteFunc } from "../features/cardSlice";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTrash } from "@fortawesome/free-solid-svg-icons";

const CheckOutMobil = () => {
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
      <div className="w-5/6 m-auto mt-6">
        {cartItems.map((item) => (
          <div className="flex flex-col justify-around   border borer-1 ">
            <div className="w-full h-48  m-auto">
              <img
                src={item.thumbnail}
                className="w-full h-full m-auto object-container"
                alt="sd"
              />
            </div>
            <div className="flex justify-between p-2">
              <div>Title:</div>
              <div>{item.title}</div>
            </div>
            <div className="flex justify-between p-2">
              <div>Price:</div>
              <div>{item.price}</div>
            </div>
            <div className="flex justify-between p-2">
              <div>Quantity:</div>
              <div>{item.quantity}</div>
            </div>
            <div className="flex justify-between p-2">
              <div>Total:</div>
              <div>{item.price * item.count}</div>
            </div>
            <div className="flex justify-between p-2">
              <div className="">Count</div>
              <div className="flex items-center justify-center gap-2 h-4 w-24">
                <button
                  onClick={() => incrementBtn(item)}
                  className="w-1/2 bg-gray-200 hover:bg-gray-400 "
                >
                  -
                </button>
                <button className="w-1/2 bg-gray-600 "> {item.count}</button>
                <button
                  onClick={() => decrementBtn(item)}
                  className="w-1/2 bg-gray-200 hover:bg-gray-400 "
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CheckOutMobil;
