"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import SummarySection from "./totalprice";

const CartPage = () => {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // Load cart items from localStorage on component mount
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(savedCart);
  }, []);

  // Calculate the total price
  useEffect(() => {
    const total = cartItems.reduce(
      (acc, item) => acc + item.pricePerDay * item.quantity,
      0
    );
    setTotalPrice(total);
  }, [cartItems]);

  // Handle quantity change
  const handleQuantityChange = (id: string, quantity: number) => {
    if (quantity < 1) return; // Prevent zero or negative quantities
    const updatedCart = cartItems.map((item) =>
      item._id === id ? { ...item, quantity } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Remove item from cart
  const handleRemoveItem = (id: string) => {
    const updatedCart = cartItems.filter((item) => item._id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Your Cart</h1>

        {cartItems.length === 0 ? (
          <div className="text-center">
            <p className="text-xl text-gray-500 mb-6">
              Your cart is empty. Add some items to see them here.
            </p>
            <Link href="/cars">
              <button className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700">
                Browse Cars
              </button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Cart Items Section */}
            <div className="md:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item._id}
                  className="flex items-start bg-white p-4 rounded-lg shadow-md"
                >
                  {/* Image */}
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    className="rounded-lg"
                    width={120}
                    height={80}
                  />
                  {/* Details */}
                  <div className="ml-4 flex-1">
                    <h2 className="text-lg font-bold text-gray-800">
                      {item.name}
                    </h2>
                    <p className="text-gray-600 text-sm">{item.type}</p>
                    <div className="flex items-center mt-2">
                      <span className="text-sm text-gray-500">
                        Price: {item.pricePerDay}/day
                      </span>
                    </div>
                    {/* Quantity Controls */}
                    <div className="flex items-center text-black mt-4">
                      <button
                        onClick={() =>
                          handleQuantityChange(item._id, item.quantity - 1)
                        }
                        className="px-2 py-1 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
                      >
                        -
                      </button>
                      <span className="px-4">{item.quantity}</span>
                      <button
                        onClick={() =>
                          handleQuantityChange(item._id, item.quantity + 1)
                        }
                        className="px-2 py-1 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  {/* Remove Button */}
                  <button
                    onClick={() => handleRemoveItem(item._id)}
                    className="text-red-500 font-bold ml-4 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
{/* Summary Section */}
            <SummarySection totalPrice={totalPrice} />
            
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
