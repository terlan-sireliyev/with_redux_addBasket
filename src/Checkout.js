import React from "react";
import { useSelector } from "react-redux";
import styles from "./features/style.module.css";
const Checkout = () => {
  const cartItem = useSelector((state) => state.cart.cart);
  return (
    <>
      <div className="text-center text-2xl font-bold">
        Your general orders {cartItem.length}
      </div>
      <div className={styles.checkoutWrapp}>
        {cartItem.map((item) => {
          return (
            <>
              <div className={styles.checkoutCard}>
                <img
                  src={item.thumbnail}
                  style={{ width: "150px", height: "150px" }}
                  alt="sd"
                />
                <p>{item.title}</p>
                <p>{item.price}</p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Checkout;
