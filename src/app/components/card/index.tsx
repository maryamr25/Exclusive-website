'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const initialCart: CartItem[] = [
  { id: 1, name: "LCD Monitor", price: 650, quantity: 1, image: "/mointer.png" },
  { id: 2, name: "H1 Gamepad", price: 550, quantity: 2, image: "/game1.png" },
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCart);

  const handleQuantityChange = (id: number, newQuantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>
      <div className="flex items-center justify-betwee gap-2 mt-10 mb-5">
            <h3 className="font-bold md:text-1xl lg:text-2xl text-sm uppercase w-2/5">Product Details</h3>
            <h3 className="font-bold md:text-1xl lg:text-2xl text-sm uppercase w-1/5 text-center">Price</h3>
            <h3 className="font-bold md:text-1xl lg:text-2xl text-sm uppercase w-1/5 text-center">Quantity</h3>
            
            <h3 className="font-bold  md:text-1xl lg:text-2xl text-sm uppercase w-1/5 text-center">Total</h3>
          </div>
      <div 
    //   className="grid grid-cols-1 lg:grid-cols-3 gap-4"
      >
        <div 
        // className="lg:col-span-2"
        >
          <div className="bg-white shadow-md rounded p-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b py-4"
              >
                <div className="flex flex-wrap w-2/5  items-center gap-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={16}
                    height={16}
                    
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <h2 className="lg:text-1xl md:text-xl xl:text-2xl 2xl:text-3xl text-sm font-semibold">{item.name}</h2>
                  
                     <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>

                  </div>
                 
                </div>
                {/* price */}
                <div className="w-1/5 text-center">
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  </div>
                  {/* quantity */}
                <div className="flex justify-center items-center w-1/5 gap-4">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(item.id, parseInt(e.target.value))
                    }
                    className="w-12 border rounded px-2 text-center"
                  />
                  {/* <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button> */}
                </div>
                <div className="w-1/5 text-center">
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  </div>
              </div>
            ))}
          </div>
        </div>

      
      </div>

      {/* buttons */}
      <div className="flex justify-between mt-10">
        <Link href='/' className="px-2 md:px-4 lg:px-6 py-1 md:py-2 lg:py-3 border border-gray-600 hover:bg-gray-200 ">Return To Shop</Link>
        <Link href='/' className="px-2 md:px-4 lg:px-6 py-1 md:py-2 lg:py-3 border border-gray-600 hover:bg-gray-200 ">Update Cart</Link>
      </div>


{/* lower section */}
<div className="flex flex-wrap mt-10 justify-between gap-6">
    {/* input section */}
    <div className="w-full md:w-1/2 lg:w-1/3 ">
    <form className="flex flex-wrap gap-2">
        <div>
            <input
              type="text"
              placeholder="Coupon Code"
              className=" border border-gray-700  px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-800"
              required
            />
            </div>
            <div className='flex justify-end items-end'>
            <button
            type="submit"
            className="bg-primary text-white  px-6 py-2 hover:bg-red-700 transition-colors"
          >
            Send Message
          </button>
          </div>
            </form>

    </div>
        {/* Cart Summary */}
        <div className="bg-gray-50 shadow-md w-full md:w-1/2 lg:w-1/3 border p-4">
          <h2 className="text-2xl font-semibold mb-4">Cart Total</h2>
          <div className="flex justify-between mb-2">
            <span>Subtotal:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Shipping:</span>
            <span className="text-green-500">Free</span>
          </div>
          <div className="flex justify-between text-xl font-bold">
            <span>Total:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>

          <div className="mt-6 mx-auto justify-center items-center text-center">
          <Link href='/checkout'  className="mx-auto bg-primary hover:bg-red-600 text-white  py-2 px-4 ">
            Proceed to Checkout
          </Link>
          </div>
        </div>

        </div>

    </div>
  );
}
