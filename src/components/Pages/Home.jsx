import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../../redux/counterSlice";
import axios from "axios";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { addTocart } from "../../redux/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import { createStore } from "./../../../node_modules/redux/src/createStore";

export default function Home() {
  const dispatch = useDispatch();
  const [product, setProduct] = useState([]);

  let getProduct = () => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => res.data)
      .then((finalresult) => setProduct(finalresult.products));
  };
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <section className="py-5">
      <h1 className="text-3xl text-center font-bold">Our Product</h1>

      <div className="max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mt-5 px-5">
        {product.map((obj, index) => {
          return <ProductCard data={obj} key={index} />;
        })}
      </div>
      <ToastContainer />
    </section>
  );
}

function ProductCard({ data }) {
  let { price, title, thumbnail, description, id } = data;
  let dispatch = useDispatch();
  let cart = useSelector((mystore) => mystore.cartStore.cart);
  let checkItemincart = cart.find((obj) => obj.id == id);
  console.log(cart);
  let addToCartItem = () => {
    let cartObj = {
      title,
      price,
      image: thumbnail,
      qty: 1,
      description,
      id,
    };
    dispatch(addTocart({ cartObj }));
    toast.success("Item Added in Cart");
  };
  return (
    <div className="w-80 bg-white rounded-3xl shadow-lg overflow-hidden hover:scale-105 duration-300">
      {/* Image */}
      <img src={thumbnail} alt="Product" className="w-full h-64 object-cover" />

      {/* Content */}
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-3">{title}</h2>

        <p className="text-gray-600 mb-5">{data.description}</p>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-blue-600">{price}</span>

          {checkItemincart ? (
            <button className="bg-red-500 text-white px-5 py-2 rounded-xl">
              Remove Cart
            </button>
          ) : (
            <button
              onClick={addToCartItem}
              className="bg-blue-600 text-white px-5 py-2 rounded-xl"
            >
              Add Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
