"use client";

import Link from "next/link";

const SummarySection = ({ totalPrice = 0 }: { totalPrice: number | undefined }) => {
  // Ensure totalPrice is always a valid number
  const subtotal = totalPrice || 0;
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-bold text-gray-800 mb-4">Order Summary</h2>
      <div className="space-y-2 text-gray-600">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Tax (10%)</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-bold">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
      <Link href={"/paymentpage"}>
        <button className="w-full mt-6 px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700">
          Proceed to Checkout
        </button>
      </Link>
      <Link href="/">
        <button className="w-full mt-3 px-6 py-3 bg-gray-300 text-gray-800 font-bold rounded-lg hover:bg-gray-400">
          Continue Shopping
        </button>
      </Link>
    </div>
  );
};

export default SummarySection;



