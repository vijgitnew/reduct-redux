import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement } from '../../redux/counterSlice'
export default function Cart() {

  const dispatch = useDispatch()
  let cart = useSelector((myStore) => myStore.cartStore.cart)

  return (
    <section className="max-w-[1400px] mx-auto py-10 px-5">

  <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>
  <div className='flex gap-5 items-start'>
  <div className="flex-[4] gap-5 flex flex-col">
{
  cart.length>=1
  ?
  cart.map((cartobjet, index) =>  <CartRow key={index} cartobject={cartobjet} />)
    
     :
     <p>No Data Found</p>
}
 
  
    <div>
</div>
  </div>
 
      <div className="bg-white  flex-[2]  align-items: flex-start rounded-2xl shadow-sm border p-6">
        <h2 className="text-3xl font-bold mb-6">Order Summary</h2>
        <div className="space-y-5 text-lg">
          <div className="flex justify-between">
            <span>Original Price</span>
            <span>$7592</span>
          </div>
          <div className="flex justify-between text-green-600">
            <span>Savings</span>
            <span>-$299</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>$99</span>
          </div>
          <div className="flex justify-between">
            <span>Tax</span>
            <span>$799</span>
          </div>
          <div className="border-t pt-5 flex justify-between text-2xl font-bold">
            <span>Total</span>
            <span>$8191</span>
          </div>
        </div>
        <button className="w-full bg-black text-white py-4 rounded-xl mt-8 text-xl hover:bg-gray-800">
          Checkout
        </button>
      </div>
      
    </div>
</section>


  )
}

function CartRow({cartobject}){
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
            <p className="text-gray-500 mt-2">
              {cartobject.description}
            </p>
 
            <div className="flex gap-6 mt-4">
              <button className="text-gray-500 hover:text-black">
                ♡ Add to Favorites
              </button>
              <button className="text-red-500 hover:underline">✕ Remove</button>
            </div>
          </div>
        </div>
 
        <div className="flex items-center gap-8">

          <div className="flex items-center gap-4 border rounded-lg px-4 py-2">
            <button className="text-xl">-</button>
            <span className="font-semibold">{cartobject.qty}</span>
            <button className="text-xl">+</button>
          </div>

          <h3 className="text-2xl font-bold">${cartobject.price}</h3>
        </div>
      </div>

      
    </div>
  )
}