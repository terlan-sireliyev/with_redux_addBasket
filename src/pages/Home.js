import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addtoCart } from "../features/cardSlice";
import styles from "../features/style.module.css";
const Home = () => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart.cart);
  const [product, setProducts] = useState([]);
  const emptyArray = [];
  const commonArray = [];
  useEffect(() => {
    fetch("https://dummyjson.com/carts")
      .then((res) => res.json())
      .then((result) => {
        setProducts({ products: result.carts });
        emptyArray.push(product);
        // products.foreach((im) => console.log(im));
      });
    // console.log(emptyArray[result.products]);
    // emptyArray.forEach((im) => commonArray.push(im.products));
    // console.log(commonArray);
  }, []);
  for (let ad in product) {
    emptyArray.push(...product[ad]);
  }

  const addCart = (item) => {
    dispatch(
      addtoCart({
        id: item.id,
        thumbnail: item.thumbnail,
        title: item.title,
        price: item.price,
        quantity: item.quantity,
        delivery: item.delivery,
      })
    );
  };
  return (
    <>
      {emptyArray.map((items) => {
        return (
          <div className={styles.wrap}>
            {items.products.map((item) => {
              return (
                <>
                  <div className={styles.cardOne}>
                    <div className="w-[230px] max-md:w-[100%] max-md:h-[50%] h-64 p-2">
                      <img
                        src={item.thumbnail}
                        className="w-full h-full max-md:w-full object-sticky"
                        alt="sd"
                      />
                    </div>
                    <p className="flex my-[3px]">
                      <p className=" ml-2  font-bold">Prdocust name: </p>
                      <p className="ml-2">
                        {item.title.split("").slice(0, 8)}...
                      </p>
                    </p>
                    <p className="flex  my-[3px]">
                      <h1 className=" ml-2 text-left font-bold">
                        Product price:{item.quantity}
                      </h1>
                      <p className="ml-[5px]">{item.price}</p>
                    </p>
                    <button
                      className={`${"max-sm:text-[14px] w-4/5 m-auto border border-600 px-8 py-2 my-4 max-md:mt-[90px]"}`}
                      onClick={() => addCart(item)}
                    >
                      Add to cart
                    </button>
                  </div>
                </>
              );
            })}
          </div>
        );
      })}
    </>
  );
};

export default Home;
