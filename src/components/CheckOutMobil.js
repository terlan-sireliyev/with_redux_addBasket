import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, deleteFunc } from "../features/cardSlice";
import { ChooseShoppingMobil } from "../components/ChooseShopping";

const CheckOutMobil = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cart);
  const [shippingMode, setShippingMode] = useState("free"); // State to track the selected shipping mode

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
      {cartItems.length > 0 ? (
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
                    onClick={() => decrementBtn(item)}
                    className="w-1/2 bg-gray-200 hover:bg-gray-400 "
                  >
                    -
                  </button>
                  <button className="w-1/2 bg-gray-600 "> {item.count}</button>
                  <button
                    onClick={() => incrementBtn(item)}
                    className="w-1/2 bg-gray-200 hover:bg-gray-400 "
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
          <ChooseShoppingMobil
            shippingMode={shippingMode}
            setShippingMode={setShippingMode}
            reducer={reducer}
            reducerDelivery={reducerDelivery}
          />
        </div>
      ) : (
        <div className=" mt-[-17px] bg-gray-300 flex items-center justify-center w-full h-dvh">
          <h1 className="text-[100px] max-sm:text-[70px]">Empty cart</h1>
        </div>
      )}
    </>
  );
};

export default CheckOutMobil;
