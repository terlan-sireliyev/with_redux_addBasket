import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addtoCart } from "../features/cardSlice";
import styles from "../features/style.module.css";
const Home = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);
  const [product, setProducts] = useState([]);
  const emptyArray = [];
  useEffect(() => {
    fetch("https://dummyjson.com/carts")
      .then((res) => res.json())
      .then((result) => {
        setProducts({ products: result.carts });
        emptyArray.push(product);
      });
  }, []);
  for (let ad in product) {
    emptyArray.push(...product[ad]);
  }

  const addCart = (item) => {
    const isInCart = cart.cart.find((cartItem) => cartItem.id === item.id);
    if (isInCart) {
      alert(
        "\u{1F4E2} Уважаемый пользователь \u{1F4E2}\n\n" +
          "Вы уже добавляли сюда товар «" +
          isInCart.title +
          "».\n\n" +
          "Если вы хотите увеличить количество, перейдите в корзину и увеличьте его оттуда."
      );
      return;
    }
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
      <div className="">
        {emptyArray.map((items) => {
          return (
            <div className={styles.wrap}>
              {items.products.map((item) => {
                return (
                  <>
                    <div className={styles.cardOne}>
                      <div className="w-full max-md:w-[100%] max-md:h-[65%] h-64 p-2">
                        <img
                          src={item.thumbnail}
                          className="w-full h-full max-md:w-full object-sticky"
                          alt="sd"
                        />
                      </div>
                      <p className=" flex my-[3px] justify-center">
                        <p className="line-clamp-1 ml-2">{item.title}...</p>
                      </p>
                      <p className="flex justify-center my-[6px]">
                        <p className="ml-[5px] bg-rose-600 text-white font-bold px-4 py-[2px] rounded">
                          {item.price} AZN
                        </p>
                      </p>
                      <button
                        className={`${"max-sm:text-[14px] w-4/5 m-auto border border-600 py-2 my-2 "}`}
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
      </div>
    </>
  );
};

export default Home;
