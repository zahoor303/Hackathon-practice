// "use client";
// import { useEffect, useState } from "react";
// import Image from "next/image";

// export default function Wishlist() {
//   const [wishlist, setWishlist] = useState<any[]>([]);
//   const [notification, setNotification] = useState("");

//   useEffect(() => {
//     try {
//       const storedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
//       setWishlist(storedWishlist);
//     } catch (err) {
//       console.error("Failed to fetch wishlist:", err);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("wishlist", JSON.stringify(wishlist));
//   }, [wishlist]);

//   const handleAddToWishlist = (item: any) => {
//     const exists = wishlist.some((product) => product._id === item._id);
//     if (!exists) {
//       setWishlist([...wishlist, item]);
//       setNotification(`${item.name} has been added to your wishlist.`);
//     } else {
//       setNotification( `${item.name} is already in your wishlist.`);
//     }

//     setTimeout(() => setNotification(""), 3000);
//   };

//   const handleRemoveFromWishlist = (item: any) => {
//     setWishlist(wishlist.filter((product) => product._id !== item._id));
//     setNotification(`${item.name} has been removed from your wishlist.`);
//     setTimeout(() => setNotification(""), 3000);
//   };

//   if (wishlist.length === 0) {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-gray-100">
//         <div className="text-center">
//           <h1 className="text-3xl font-bold text-gray-800 mb-4">Wishlist</h1>
//           <p className="text-gray-600">Your wishlist is currently empty.</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto py-8">
//       <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">My Wishlist</h1>
//       {notification && (
//         <div className="text-center bg-green-100 text-green-800 p-2 rounded-lg mb-4">
//           {notification}
//         </div>
//       )}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {wishlist.map((item) => (
//           <div
//             key={item._id}
//             className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
//           >
//             <div className="relative">
//               <Image
//                 src={item.imageUrl || "/fallback-image.png"}
//                 alt={item.name || "Unnamed Item"}
//                 width={300}
//                 height={200}
//                 className="rounded-lg object-cover"
//               />
//               <button
//                 className="absolute top-2 right-2 text-red-500 text-xl"
//                 onClick={() => handleRemoveFromWishlist(item)}
//               >
//                 ♥
//               </button>
//             </div>
//             <h2 className="text-lg font-bold mt-4 text-gray-800">{item.name}</h2>
//             <p className="text-gray-600 text-sm mt-2">
//               Price Per Day:{" "}
//               <span className="font-bold text-gray-800">${item.pricePerDay}</span>
//             </p>
//             <button
//               onClick={() => handleRemoveFromWishlist(item)}
//               className="bg-red-500 text-white px-4 py-2 mt-4 rounded-lg hover:bg-red-600 transition duration-300"
//             >
//               Remove
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";

// export default function Wishlist() {
//   const [wishlist, setWishlist] = useState<any[]>([]);
//   const [notification, setNotification] = useState("");

//   // Load wishlist from localStorage on component mount
//   useEffect(() => {
//     try {
//       const storedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
//       setWishlist(storedWishlist);
//     } catch (err) {
//       console.error("Failed to fetch wishlist:", err);
//     }
//   }, []);

//   // Update localStorage whenever the wishlist changes
//   useEffect(() => {
//     localStorage.setItem("wishlist", JSON.stringify(wishlist));
//   }, [wishlist]);

//   // Add a car to the wishlist
//   const handleAddToWishlist = (item: any) => {
//     const exists = wishlist.some((product) => product._id === item._id);
//     if (!exists) {
//       setWishlist([...wishlist, item]);
//       setNotification(`${item.name} has been added to your wishlist.`);
//     } else {
//       setNotification(`${item.name} is already in your wishlist.`);
//     }

//     // Clear notification after 3 seconds
//     setTimeout(() => setNotification(""), 3000);
//   };

//   // Remove a car from the wishlist
//   const handleRemoveFromWishlist = (item: any) => {
//     const updatedWishlist = wishlist.filter((product) => product._id !== item._id);
//     setWishlist(updatedWishlist);
//     setNotification(`${item.name} has been removed from your wishlist.`);
    
//     // Clear notification after 3 seconds
//     setTimeout(() => setNotification(""), 3000);
//   };

//   // Render the wishlist
//   if (wishlist.length === 0) {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-gray-100">
//         <div className="text-center">
//           <h1 className="text-3xl font-bold text-gray-800 mb-4">Wishlist</h1>
//           <p className="text-gray-600">Your wishlist is currently empty.</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto py-8">
//       <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">My Wishlist</h1>
      
//       {/* Show notification */}
//       {notification && (
//         <div className="text-center bg-green-100 text-green-800 p-2 rounded-lg mb-4">
//           {notification}
//         </div>
//       )}

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {wishlist.map((item) => (
//           <div
//             key={item._id}
//             className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
//           >
//             <div className="relative">
//               <Image
//                 src={item.imageUrl || "/fallback-image.png"}
//                 alt={item.name || "Unnamed Item"}
//                 width={300}
//                 height={200}
//                 className="rounded-lg object-cover"
//               />
//               {/* Remove from wishlist */}
//               <button
//                 className="absolute top-2 right-2 text-red-500 text-xl"
//                 onClick={() => handleRemoveFromWishlist(item)}
//               >
//                 ♥
//               </button>
//             </div>
//             <h2 className="text-lg font-bold mt-4 text-gray-800">{item.name}</h2>
//             <p className="text-gray-600 text-sm mt-2">
//               Price Per Day:{" "}
//               <span className="font-bold text-gray-800">${item.pricePerDay}</span>
//             </p>
//             <button
//               onClick={() => handleRemoveFromWishlist(item)}
//               className="bg-red-500 text-white px-4 py-2 mt-4 rounded-lg hover:bg-red-600 transition duration-300"
//             >
//               Remove
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Wishlist() {
  const [wishlist, setWishlist] = useState<any[]>([]);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    setWishlist(storedWishlist);
  }, []);

  const handleRemoveFromWishlist = (item: any) => {
    const updatedWishlist = wishlist.filter((product) => product._id !== item._id);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  return (
    <div className="container min-h-screen min-w-full bg-white">
      <h1 className="text-3xl font-bold mb-6 text-center text-black ">My Wishlist</h1>
      {wishlist.length === 0 ? (
        <p className="text-center text-gray-900">Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {wishlist.map((item) => (
            <div key={item._id} className="bg-white p-4 rounded-lg shadow-md">
              <Image
                src={item.imageUrl || "/placeholder.png"}
                alt={item.name}
                width={300}
                height={200}
                className="rounded-lg"
              />
              <h3 className="text-lg font-bold mt-2 text-black">{item.name}</h3>
              <p className="text-gray-600 mt-2">{item.pricePerDay}</p>

              {/* Add to cart */} 
              <Link href={`/cart`}>

              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                Add to cart
              </button>
              </Link>
              {/* Remove from wishlist */}
              <button
                onClick={() => handleRemoveFromWishlist(item)}
                className="mt-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
