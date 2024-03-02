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
  const [shippingMode, setShippingMode] = useState("free"); // State to track the selected shipping mode

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
  const reducer = cartItems.reduce(
    (prev, current) => prev + current.price * current.count,
    0
  );

  const reducerDelivery = cartItems.reduce(
    (prev, current) => reducer + current.delivery,
    0
  );
  return (
    <>
      <div className="w-5/6 m-auto my-6 ">
        {cartItems.map((item) => (
          <div className="flex flex-col  justify-around my-4  border borer-1 ">
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
        <div className="flex max-md:flex-col max-md:w-full">
          <div className="w-[100%] border border-1 p-2 border-r-0">
            <h1>Choose shoppig mode:</h1>
            <div>
              <input
                type="radio"
                id="free"
                name="shippingMode"
                value="free"
                checked={shippingMode === "free"}
                onChange={() => setShippingMode("free")}
              />
              <label htmlFor="free">Free</label>
            </div>
            <div>
              <input
                type="radio"
                id="delivery"
                name="shippingMode"
                value="delivery"
                checked={shippingMode === "delivery"}
                onChange={() => setShippingMode("delivery")}
              />
              <label htmlFor="delivery">Delivery: 9AZN</label>
            </div>
          </div>
          <div className="w-[100%] border border-1 p-2 border-t-0">
            <div className="flex justify-between">
              <p>subtotal ttc:</p>
              <p>{reducer}</p>
            </div>
            <div className="flex justify-between">
              <p>Shipping:</p>
              <p>{shippingMode === "free" ? "Free" : "9AZN"}</p>
            </div>
            <div className="flex justify-between">
              <p>total:</p>
              <p>{shippingMode === "free" ? reducer : reducerDelivery}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOutMobil;
