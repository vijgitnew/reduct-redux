import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement } from "../../redux/counterSlice";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";
import { deleteCart , ChangeQty } from "../../redux/cartSlice";
export default function Cart() {
  const dispatch = useDispatch();
  let cart = useSelector((myStore) => myStore.cartStore.cart);
  let total = cart.reduce((acc, obj) => {
  return acc + obj.qty * obj.price;
}, 0);

  return (
    <section className="max-w-[1400px] mx-auto py-10 px-5">
      <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>
      <div className="flex gap-5 items-start">
        <div className="flex-[4] gap-5 flex flex-col">
          {cart.length >= 1 ? (
            cart.map((cartobjet, index) => (
              <CartRow key={index} cartobject={cartobjet} />
            ))
          ) : (
            <p>No Data Found</p>
          )}

          <div></div>
        </div>

        <div className="bg-white  flex-[2]  align-items: flex-start rounded-2xl shadow-sm border p-6">
          <h2 className="text-3xl font-bold mb-6">Order Summary</h2>
          <div className="space-y-5 text-lg">
            <div className="flex justify-between">
              <span>Original Price</span>
              <span>${Math.round(total, 2)}</span>
            </div>
            
            <div className="border-t pt-5 flex justify-between text-2xl font-bold">
              <span>Total</span>
              <span>${Math.round(total, 2)+100}</span>
            </div>
          </div>
          <button className="w-full bg-black text-white py-4 rounded-xl mt-8 text-xl hover:bg-gray-800">
            Checkout
          </button>
        </div>
      </div>
    </section>
  );
}

function CartRow({ cartobject }) {
  const dispatch = useDispatch();
  let { id, qty } = cartobject;
  let removeCart = () => {
    dispatch(deleteCart({ id }));

    Swal.fire({
      title: "Are you sure you want to delete",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteCart({ id }));

        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };
let handleQtyChange = (type) => {
  let finalQty = qty;

  if (type === "+") {
    finalQty = qty + 1;
  } else if (type === "-") {
    finalQty = qty > 1 ? qty - 1 : 1;
  }

  dispatch(ChangeQty({ id, finalQty }));
};
  return (
    <div className="lg:col-span-2 space-y-6">
      <div className="bg-white rounded-2xl shadow-sm border p-5 flex items-center justify-between">
        <div className="flex items-center gap-5">
          <img
            src={cartobject.image}
            alt=""
            className="w-32 h-32 object-contain"
          />

          <div>
            <h2 className="text-xl font-semibold max-w-xl">
              {cartobject.title}| ${cartobject.price}
            </h2>
            <p className="text-gray-500 mt-2">{cartobject.description}</p>

            <div className="flex gap-6 mt-4">
              <button className="text-gray-500 hover:text-black">
                ♡ Add to Favorites
              </button>
              <button
                className="text-red-500 hover:underline"
                onClick={removeCart}
              >
                ✕ Remove
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-8">
          <div className="flex items-center gap-4 border rounded-lg px-4 py-2">
            <button onClick={() => handleQtyChange("-")}>
              -
            </button>

            <span className="font-semibold">{cartobject.qty}</span>

            <button onClick={() => handleQtyChange("+")}>
              +
            </button>
          </div>
          <h3 className="text-2xl font-bold">
            ${cartobject.price * cartobject.qty}
          </h3>
        </div>
      </div>
    </div>
  );
}
