// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { useRouter } from "next/navigation";


// export default function CartPage() {
//   const [cart, setCart] = useState<any[]>([]);
//   const [total, setTotal] = useState();
//   const router = useRouter();

//   useEffect(() => {
//     // Fetch cart items from localStorage
//     const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");

//     // Ensure the data is valid
//     const validatedCart = storedCart.map((item: any) => ({
//       ...item,
//       pricePerDay: parseFloat(item.pricePerDay) || 0, // Ensure pricePerDay is a number
//       quantity: parseInt(item.quantity) || 1, // Ensure quantity is a number
//     }));

//     setCart(validatedCart);

//     // Calculate total price
//     const totalPrice = validatedCart.reduce(
//       (acc: number, item: any) => acc + item.pricePerDay * item.quantity,
//       0
//     );
//     setTotal(totalPrice);
//   }, []);

//   const handleRemove = (id: string) => {
//     const updatedCart = cart.filter((item) => item._id !== id);
//     setCart(updatedCart);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//     alert("Item removed from cart!");
//   };

//   const handleCheckout = () => {
//     alert("Proceeding to checkout!");
//     router.push("/checkout"); // Navigate to checkout page
//   };

//   if (cart.length === 0) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-100">
//         <h1 className="text-2xl font-bold text-gray-600">
//           Your cart is empty. 🛒
//         </h1>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-gray-100 min-h-screen">
//       <h1 className="text-3xl font-bold text-gray-800 mb-6">Your Cart</h1>
//       <div className="bg-white shadow-lg rounded-lg overflow-hidden">
//         <ul>
//           {cart.map((item) => (
//             <li
//               key={item._id}
//               className="flex items-center justify-between border-b p-4"
//             >
//               <div className="flex items-center space-x-4">
//                 <Image
//                   src={item.imageUrl}
//                   alt={item.name}
//                   width={80}
//                   height={80}
//                   className="rounded-md"
//                 />
//                 <div>
//                   <h2 className="text-lg font-bold">{item.name}</h2>
//                   <p className="text-sm text-gray-600">
//                      ${item.pricePerDay}
//                   </p>
//                   <p className="text-sm text-gray-600">
//                     Quantity: {item.quantity}
//                   </p>
//                 </div>
//               </div>
//               <div className="flex items-center space-x-4">
//                 <p className="text-lg font-bold">
//                   ${item.pricePerDay * item.quantity}
//                 </p>
//                 <button
//                   onClick={() => handleRemove(item._id)}
//                   className="text-red-600 hover:underline"
//                 >
//                   Remove
//                 </button>
//               </div>
//             </li>
//           ))}
//         </ul>
//         <div className="p-4">
//           <div className="flex justify-between items-center text-lg font-bold">
//             <span>Total:</span>
//             <span>${total}</span>
//           </div>
//           <button
//             onClick={handleCheckout}
//             className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
//           >
//             Checkout
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }





"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const [cart, setCart] = useState<any[]>([]);
  const [total, setTotal] = useState<number>(0); // Initialize total as a number
  const router = useRouter();

  useEffect(() => {
    // Fetch cart items from localStorage
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");

    // Ensure all cart items have valid prices and quantities
    const validatedCart = storedCart.map((item: any) => ({
      ...item,
      pricePerDay: parseFloat(item.pricePerDay), // Ensure pricePerDay is a number
      quantity: parseInt(item.quantity), // Ensure quantity is a number
    }));

    setCart(validatedCart);

    // Calculate the total price
    const totalPrice = validatedCart.reduce(
      (acc: number, item: any) => acc + item.pricePerDay * item.quantity,
      0
    );

    setTotal(totalPrice); // Update total
  }, []);

  const handleRemove = (id: string) => {
    // Remove item from cart
    const updatedCart = cart.filter((item) => item._id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    // Recalculate total
    const updatedTotal = updatedCart.reduce(
      (acc: number, item: any) => acc + item.pricePerDay * item.quantity,
      0
    );
    setTotal(updatedTotal);

    alert("Item removed from cart!");
  };

  const handleCheckout = () => {
    alert("Proceeding to checkout!");
    router.push("/checkout"); // Navigate to checkout page
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <h1 className="text-2xl font-bold text-gray-600">
          Your cart is empty. 🛒
        </h1>
      </div>
    );
  }

  return (
    <div className="max-w-full mx-auto p-6 bg-gray-100 min-h-screen ">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Your Cart</h1>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <ul>
          {cart.map((item) => (
            <li
              key={item._id}
              className="flex items-center justify-between border-b p-4"
            >
              <div className="flex items-center space-x-4">
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="rounded-md"
                />
                <div>
                  <h2 className="text-lg font-bold">{item.name}</h2>
                  <p className="text-sm text-gray-600">Price: ${item.pricePerDay}</p>
                  <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <p className="text-lg font-bold">
                  Total: ${item.pricePerDay * item.quantity}
                </p>
                <button
                  onClick={() => handleRemove(item._id)}
                  className="text-red-600 hover:underline"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
        <div className="p-4">
          <div className="flex justify-between items-center text-lg font-bold">
            <span>Total Price:</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button
            onClick={handleCheckout}
            className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
