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
  useEffect(() => {
    fetch("https://dummyjson.com/carts")
      .then((res) => res.json())
      .then((result) => {
        setProducts({ id: result.carts });
        emptyArray.push(product);
      });
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
      })
    );
  };
  return (
    <>
      <nav className="flex gap-4 justify-center items-center mt-4">
        <Link to="/">Home</Link>
        <Link to="/checkout" className="flex">
          Basket <p className="font-bold ml-[3px]">({cartItem.length})</p>
        </Link>
      </nav>
      {emptyArray.map((items) => {
        return (
          <div className={styles.wrap}>
            {items.products.map((item) => {
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
                      <p className="ml-2">
                        {item.title.split("").slice(0, 15)}...
                      </p>
                    </p>
                    <p className="flex  my-[3px]">
                      <h1 className=" ml-2 text-left font-bold">
                        Product price:
                      </h1>
                      <p className="ml-[5px]">{item.price}</p>
                    </p>
                    <button
                      className="border w-4/5 m-auto border-600 px-8 py-2 my-4"
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
