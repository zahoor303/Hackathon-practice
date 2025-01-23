// import { useEffect, useState } from "react";
// import Image from "next/image";

// export default function CartPage() {
//   const [cart, setCart] = useState<any[]>([]);

//   // Load cart items from localStorage
//   useEffect(() => {
//     const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
//     setCart(storedCart);
//   }, []);

//   // Remove an item from the cart
//   const handleRemoveFromCart = (item: any) => {
//     const updatedCart = cart.filter((cartItem) => cartItem._id !== item._id);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//     setCart(updatedCart);
//   };

//   // Calculate the total price
//   const calculateTotal = () => {
//     return cart.reduce((total, item) => total + item.pricePerDay, 0);
//   };

//   if (cart.length === 0) {
//     return (
//       <div className="text-center text-black py-8">
//         <h1 className="text-2xl font-bold">Your cart is empty.</h1>
//         <p className="text-gray-600 mt-4">Browse products and add them to your cart.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto py-8">
//       <h1 className="text-2xl text-black font-bold mb-6">My Cart</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {cart.map((item) => (
//           <div key={item._id} className="bg-white p-4 rounded-lg text-black shadow-md">
//             <Image
//               src={item.imageUrl || "/placeholder.png"}
//               alt={item.name}
//               width={200}
//               height={200}
//               className="rounded-lg"
//             />
//             <h2 className="text-lg font-bold text-black mt-2">{item.name}</h2>
//             <p className="text-gray-600">${item.pricePerDay} </p>
//             <button
//               onClick={() => handleRemoveFromCart(item)}
//               className="bg-red-500 text-white px-4 py-2 mt-4 rounded-lg"
//             >
//               Remove
//             </button>
//           </div>
//         ))}
//       </div>
//       <div className="mt-8 text-right">
//         <h2 className="text-xl font-bold">Total: ${calculateTotal()}</h2>
//         <button className="bg-blue-600 text-white px-6 py-3 rounded-lg mt-4">
//           Proceed to Checkout
//         </button>
//       </div>
//     </div>
//   );
// }
