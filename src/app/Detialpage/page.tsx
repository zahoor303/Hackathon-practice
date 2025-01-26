// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import Footer from "../Components/footer";
// import Navbar from "../Components/navbar";
// import ReviewsSection from "./review";
// import RecommendedCars from "./Recommend";

// const HeroSection = () => {
//   return (
//     <div className="bg-gray-100 py-8 px-6 sm:px-10 lg:px-20">
//       {/* Header */}
//       <Navbar/>
//       {/* Main Content */}
//       <main className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
//         {/* Filters */}
//         <aside className="bg-white p-6 rounded-lg shadow-md lg:col-span-3">
//           <h2 className="text-lg font-bold mb-6 text-black">Filters</h2>
//           <div className="space-y-6">
//             {/* Type Filter */}
//             <div>
//               <h3 className="text-sm font-bold mb-2 text-black">Type</h3>
//               <ul className="space-y-2 text-black">
//                 {["Sport", "SUV", "MPV", "Sedan", "Coupe", "Hatchback"].map((type) => (
//                   <li key={type} className="flex items-center space-x-2">
//                     <input type="checkbox" className="form-checkbox" />
//                     <label className="text-sm">{type}</label>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             {/* Capacity Filter */}
//             <div>
//               <h3 className="text-sm font-bold mb-2 text-black">Capacity</h3>
//               <ul className="space-y-2 text-black">
//                 {["2 Person", "4 Person", "6 Person", "8 or More"].map((capacity) => (
//                   <li key={capacity} className="flex items-center space-x-2">
//                     <input type="checkbox" className="form-checkbox" />
//                     <label className="text-sm">{capacity}</label>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             {/* Price Filter */}
//             <div>
//               <h3 className="text-sm font-bold mb-2 text-black">Price</h3>
//               <input type="range" min="0" max="100" className="w-full bg-blue-600" /> 
//               <div className="text-sm text-black">$0 - $100</div>
            
//             </div>
//           </div>
//         </aside>

        // {/* Main Content Area */}
        // <div className="lg:col-span-9 space-y-8">
        //   {/* Car Details Section */}
        //   <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        //     <div className="bg-blue-100 p-6 rounded-lg">
        //       <h2 className="text-2xl font-bold text-blue-900 mb-4">
        //         Sports car with the best design and acceleration
        //       </h2>
        //       <p className="text-gray-700 mb-6">
        //         Safety and comfort while driving a futuristic and elegant sports car.
        //       </p>
        //       <Image src="/view.png" alt="Car" width={600} height={300} className="rounded-lg" />
        //       <div className="flex gap-4 mt-4">
        //         {["/image.png", "/view2.png", "/view 3.png"].map((src, index) => (
        //           <Image key={index} src={src} alt="Car View" width={80} height={80} className="rounded-md border cursor-pointer" />
        //         ))}
        //       </div>
        //     </div>
        //     <div className="bg-white p-6 rounded-lg shadow-md">
        //       <h3 className="text-2xl font-bold text-blue-900">Nissan GT - R</h3>
        //       <p className="text-gray-500">440+ Reviewer</p>
        //       <p className="text-gray-600 my-6">
        //         NISMO has become the embodiment of Nissan's outstanding performance.
        //       </p>
        //       <div className="grid grid-cols-2 gap-4">
        //         <div>
        //           <span className="text-sm text-gray-500">Type Car: </span>
        //           <span className="text-sm text-gray-700">Sport</span>
        //         </div>
        //         <div>
        //           <span className="text-sm text-gray-500">Capacity: </span>
        //           <span className="text-sm text-gray-700">2 Person</span>
        //         </div>
        //         <div>
        //           <span className="text-sm text-gray-500">Steering: </span>
        //           <span className="text-sm text-gray-700">Manual</span>
        //         </div>
        //         <div>
        //           <span className="text-sm text-gray-500">Gasoline: </span>
        //           <span className="text-sm text-gray-700">70L</span>
        //         </div>
        //       </div>
        //       <div className="flex items-center justify-between mt-4">
        //         <div>
        //           <p className="text-2xl font-bold text-blue-500">$80.00/day</p>
        //           <p className="text-sm text-gray-400 line-through">$100.00</p>
        //         </div>
        //         <Link href="/paymentpage">
        //           <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
        //             Rent Now
        //           </button>
        //         </Link>
        //       </div>
        //     </div>
        //   </div>

//           {/* Reviews Section */}
//           <ReviewsSection/>
//           <div>
//             {/* Recent Cars Section */}

//   <div className="flex justify-between items-center mb-4">
//     <h3 className="text-lg font-bold text-black">Recent Cars</h3>
//     <a href="#" className="text-blue-500 text-sm hover:underline">
//       View All
//     </a>
//   </div>
//   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-black">
//     {[
//       {
//         name: "Koenigsegg",
//         type: "Sport",
//         price: "$99.00/day",
//         originalPrice: "$120.00",
//         capacity: "2 People",
//         fuel: "90L",
//         transmission: "Manual",
//         image: "/car (19).png",
//         isFavorite: true,
//       },
//       {
//         name: "Nissan GT - R",
//         type: "Sport",
//         price: "$80.00/day",
//         originalPrice: "$100.00",
//         capacity: "2 People",
//         fuel: "80L",
//         transmission: "Manual",
//         image: "/car (20).png",
//         isFavorite: false,
//       },
//       {
//         name: "Rolls-Royce",
//         type: "Sport",
//         price: "$96.00/day",
//         originalPrice: "$120.00",
//         capacity: "4 People",
//         fuel: "70L",
//         transmission: "Manual",
//         image: "/car (21).png",
//         isFavorite: false,
//       },
//     ].map((car, index) => (
//       <div
//         key={index}
//         className="bg-white border border-gray-200 p-4 rounded-lg shadow-md hover:shadow-lg transition"
//       >
//         <div className="relative">
//           <Image
//             src={car.image}
//             alt={car.name}
//             width={232}
//             height={72}
//             className="w-full h-15 object-cover rounded-lg"
//           />
//           {car.isFavorite ? (
//             <div className="absolute top-2 right-2">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="red"
//                 viewBox="0 0 24 24"
//                 strokeWidth={1.5}
//                 stroke="currentColor"
//                 className="w-6 h-6  text-gray-300 hover:text-red-500 cursor-pointer"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
//                 />
//               </svg>
//             </div>
//           ) : (
//             <div className="absolute top-2 right-2">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="red"
//                 viewBox="0 0 24 24"
//                 strokeWidth={1.5}
//                 stroke="currentColor"
//                 className="w-6 h-6 text-gray-300 hover:text-red-500 cursor-pointer"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
//                 />
//               </svg>
//             </div>
//           )}
//         </div>
//         <h4 className="font-bold text-lg mt-4">{car.name}</h4>
//         <p className="text-sm text-gray-500">{car.type}</p>
//         <div className="flex items-center justify-between text-sm text-gray-600 mt-2">
//           <span>{car.fuel}</span>
//           <span>{car.transmission}</span>
//           <span>{car.capacity}</span>
//         </div>
//         <div className="mt-4 flex justify-between items-center">
//           <div>
//             <p className="text-blue-500 font-bold">{car.price}</p>
//             <p className="text-sm text-gray-400 line-through">{car.originalPrice}</p>
//           </div>
//           <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
//             Rent Now
//           </button>
//         </div>
//       </div>



//     ))}
//      <div className="flex justify-center gap-3">
//   <Link href={`/CategoryPage`}>
//     <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
//     Show more cars
//     </button>
//     </Link>
//     </div>
//   </div>

//           </div>
//           <RecommendedCars/>
//           <div className="flex justify-center mt-8">
          
//   </div>
//         </div>
        
//       </main>
    
//       {/* Footer */}
//       <Footer/>
     
//     </div>
//   );
// };

// export default HeroSection;






"use client";

import Image from "next/image";
import Link from "next/link";
import Footer from "../Components/footer";
import Navbar from "../Components/navbar";
import ReviewsSection from "./review";
import RecommendedCars from "./Recommend";
import { useState } from "react";


const HeroSection = () => {
  const cars = [
    {
      name: "Koenigsegg",
      type: "Sport",
      price: 99,
      originalPrice: 120,
      capacity: "2 Person",
      fuel: "90L",
      transmission: "Manual",
      image: "/car1.png",
      isFavorite: true,
    },
    {
      name: "Nissan GT - R",
      type: "Sport",
      price: 80,
      originalPrice: 100,
      capacity: "2 Person",
      fuel: "80L",
      transmission: "Manual",
      image: "/car2.png",
      isFavorite: false,
    },
    {
      name: "Rolls-Royce",
      type: "Sport",
      price: 96,
      originalPrice: 120,
      capacity: "4 Person",
      fuel: "70L",
      transmission: "Manual",
      image: "/car3.png",
      isFavorite: false,
    },
    {
      name: "All New Rush",
      type: "SUV",
      price: 72,
      originalPrice: 80,
      capacity: "6 Person",
      fuel: "70L",
      transmission: "Manual",
      image: "/car4.png",
      isFavorite: false,
    },
  ];

  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedCapacities, setSelectedCapacities] = useState<string[]>([]);
  const [maxPrice, setMaxPrice] = useState<number>(100);

  const handleTypeFilter = (type: string) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const handleCapacityFilter = (capacity: string) => {
    setSelectedCapacities((prev) =>
      prev.includes(capacity)
        ? prev.filter((c) => c !== capacity)
        : [...prev, capacity]
    );
  };

  const filteredCars = cars.filter((car) => {
    const matchesType =
      selectedTypes.length === 0 || selectedTypes.includes(car.type);
    const matchesCapacity =
      selectedCapacities.length === 0 ||
      selectedCapacities.includes(car.capacity);
    const matchesPrice = car.price <= maxPrice;

    return matchesType && matchesCapacity && matchesPrice;
  });

  return (
    <div className="bg-gray-100 py-8 px-6 sm:px-10 lg:px-20">
      <Navbar />

      <main className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
        {/* Filters */}
        <aside className="bg-white p-6 rounded-lg shadow-md lg:col-span-3">
          <h2 className="text-lg font-bold mb-6 text-black">Filters</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-bold mb-2 text-black">Type</h3>
              <ul className="space-y-2 text-black">
                {["Sport", "SUV", "MPV", "Sedan", "Coupe", "Hatchback"].map(
                  (type) => (
                    <li key={type} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={selectedTypes.includes(type)}
                        onChange={() => handleTypeFilter(type)}
                        className="form-checkbox"
                      />
                      <label className="text-sm">{type}</label>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold mb-2 text-black">Capacity</h3>
              <ul className="space-y-2 text-black">
                {["2 Person", "4 Person", "6 Person", "8 or More"].map(
                  (capacity) => (
                    <li key={capacity} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={selectedCapacities.includes(capacity)}
                        onChange={() => handleCapacityFilter(capacity)}
                        className="form-checkbox"
                      />
                      <label className="text-sm">{capacity}</label>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold mb-2 text-black">Price</h3>
              <input
                type="range"
                min="0"
                max="100"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full bg-blue-600"
              />
              <div className="text-sm text-black">${maxPrice}</div>
            </div>
          </div>
        </aside>
         {/* Main Content Area */}
         <div className="lg:col-span-9 space-y-8">
          {/* Car Details Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-blue-100 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">
                Sports car with the best design and acceleration
              </h2>
              <p className="text-gray-700 mb-6">
                Safety and comfort while driving a futuristic and elegant sports car.
              </p>
              <Image src="/View.png" alt="Car" width={600} height={300} className="rounded-lg" />
              <div className="flex gap-4 mt-4">
                {["/image.png", "/View2.png", "/View3.png"].map((src, index) => (
                  <Image key={index} src={src} alt="Car View" width={80} height={80} className="rounded-md border cursor-pointer" />
                ))}
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-blue-900">Nissan GT - R</h3>
              <p className="text-gray-500">440+ Reviewer</p>
              <p className="text-gray-600 my-6">
                NISMO has become the embodiment of Nissan's outstanding performance.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-sm text-gray-500">Type Car: </span>
                  <span className="text-sm text-gray-700">Sport</span>
                </div>
                <div>
                  <span className="text-sm text-gray-500">Capacity: </span>
                  <span className="text-sm text-gray-700">2 Person</span>
                </div>
                <div>
                  <span className="text-sm text-gray-500">Steering: </span>
                  <span className="text-sm text-gray-700">Manual</span>
                </div>
                <div>
                  <span className="text-sm text-gray-500">Gasoline: </span>
                  <span className="text-sm text-gray-700">70L</span>
                </div>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div>
                  <p className="text-2xl font-bold text-blue-500">$80.00/day</p>
                  <p className="text-sm text-gray-400 line-through">$100.00</p>
                </div>
                <Link href="/paymentpage">
                  <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                    Rent Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
         

        {/* Cars Section */}
        <div className="lg:col-span-9 space-y-8">
          <h3 className="text-lg font-bold text-black">Popular Cars</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCars.map((car, index) => (
              <div
                key={index}
                className="bg-white border p-4 text-black rounded-lg shadow-md hover:shadow-lg transition"
              >
                <Image
                  src={car.image}
                  alt={car.name}
                  width={232}
                  height={72}
                  className="w-full h-24 object-cover rounded-lg"
                />
                <h4 className="font-bold text-lg mt-4">{car.name}</h4>
                <p className="text-sm text-gray-500">{car.type}</p>
                <div className="flex items-center justify-between text-sm text-gray-600 mt-2">
                  <span>{car.fuel}</span>
                  <span>{car.transmission}</span>
                  <span>{car.capacity}</span>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <div>
                    <p className="text-blue-500 font-bold">${car.price}/day</p>
                    <p className="text-sm text-gray-400 line-through">
                      ${car.originalPrice}
                    </p>
                  </div>
                  <Link href={`/carpost/${car.image}`}>
                  <button className="bg-blue-500 text-white px-2 py-2 rounded-lg hover:bg-blue-600 transition">
                    Rent Now
                  </button>
                </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Reviews Section */}
          <ReviewsSection />

          {/* Recommended Section */}
          <RecommendedCars cars={filteredCars} />
        </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HeroSection;
