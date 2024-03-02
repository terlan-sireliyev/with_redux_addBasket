import React from "react";

const ChooseShopping = ({
  shippingMode,
  setShippingMode,
  reducerDelivery,
  reducer,
}) => {
  return (
    <div>
      <div className="flex max-md:flex-col">
        <div className="w-[50%] border border-1 p-2 border-r-0">
          <h1>Choose shipping mode:</h1>
          <div>
            <input
              type="radio"
              id="free"
              name="shippingMode"
              value="free"
              checked={shippingMode === "free"}
              onChange={() => setShippingMode("free")}
            />
            <label htmlFor="free"> Store pickup - FREE</label>
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
            <label htmlFor="delivery"> Delivery t home: 9AZN</label>
          </div>
        </div>
        <div className="w-[34%] border border-1 p-2 border-l border-l-rose-500">
          <div className="flex justify-between">
            <p>Subtotal TTC:</p>
            <p>{reducer}</p>
          </div>
          <div className="flex justify-between">
            <p>Shipping:</p>
            <p>{shippingMode === "free" ? "Free" : "9AZN"}</p>
          </div>
          <div className="flex justify-between">
            <p>Total:</p>
            <p>{shippingMode === "free" ? reducer : reducerDelivery}</p>
          </div>
          <div className=" mt-4 rounded text-center">
            <button className="bg-gray-600 py-[5px] w-full flex justify-around   rounded sfont-bold text-white">
              <div className="">Checktout</div>
              <div className="">
                {shippingMode === "free" ? reducer : reducerDelivery} AZN
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseShopping;

export const ChooseShoppingMobil = ({
  shippingMode,
  setShippingMode,
  reducerDelivery,
  reducer,
}) => {
  return (
    <div>
      <div className="flex max-md:flex-col max-md:w-full">
        <div className="w-[100%] border border-1 p-2 ">
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
            <label htmlFor="free"> Store pickup - FREE </label>
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
            <label htmlFor="delivery"> Delivery at home: : 9AZN</label>
          </div>
        </div>
        <div className="w-[100%] border border-1 p-2 border-t-0">
          <div className="flex justify-between">
            <p>Subtotal TCC:</p>
            <p>{reducer}</p>
          </div>
          <div className="flex justify-between">
            <p>Shipping:</p>
            <p>{shippingMode === "free" ? "Free" : "9AZN"}</p>
          </div>
          <div className="flex justify-between">
            <p>Total:</p>
            <p>{shippingMode === "free" ? reducer : reducerDelivery}</p>
          </div>
          <div className=" mt-4 rounded text-center">
            <button className="bg-gray-600 py-[5px] w-full flex justify-around   rounded sfont-bold text-white">
              <div className="">Checktout</div>
              <div className="">
                {shippingMode === "free" ? reducer : reducerDelivery} AZN
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
