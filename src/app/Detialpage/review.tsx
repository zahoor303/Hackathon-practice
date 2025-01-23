"use client";

import { useState } from "react";
import Image from "next/image";

const ReviewsSection = () => {
  const [reviews, setReviews] = useState([
    {
      name: "Alex Stanton",
      position: "CEO at Bukalapak",
      date: "21 July 2022",
      rating: 4,
      review:
        "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
    },
    {
      name: "Skylar Dias",
      position: "CEO at Amazon",
      date: "20 July 2022",
      rating: 5,
      review:
        "We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
    },
  ]);

  const [newReview, setNewReview] = useState({
    name: "",
    position: "",
    rating: 0,
    review: "",
  });

  const handleInputChange = (e:any) => {
    const { name, value } = e.target;
    setNewReview((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddReview = () => {
    if (newReview.name && newReview.position && newReview.rating && newReview.review) {
      setReviews((prev) => [
        ...prev,
        {
          ...newReview,
          date: new Date().toLocaleDateString("en-US", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          }),
        },
      ]);
      setNewReview({ name: "", position: "", rating: 0, review: "" });
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto">
      {/* Reviews Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold text-black">Reviews</h3>
        <span className="bg-blue-100 text-blue-500 text-sm font-bold px-2 py-1 rounded-full">
          {reviews.length}
        </span>
      </div>

      {/* Reviews List */}
      <div className="space-y-6">
        {reviews.map((review, index) => (
          <div key={index} className="flex flex-col sm:flex-row sm:justify-between items-start gap-4">
            <div className="flex gap-4 text-black">
              <Image
                src="/dp.png"
                alt={review.name}
                width={56}
                height={56}
                className="rounded-full object-cover"
              />
              <div>
                <h4 className="font-bold text-gray-800">{review.name}</h4>
                <p className="text-sm text-blue-500">{review.position}</p>
                <p className="text-gray-600 mt-2">{review.review}</p>
              </div>
            </div>
            <div className="flex flex-col items-end text-black sm:items-start sm:ml-auto">
              <span className="text-sm text-gray-500">{review.date}</span>
              <div className="flex text-yellow-400 mt-2">
                {Array(review.rating)
                  .fill(0)
                  .map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                {Array(5 - review.rating)
                  .fill(0)
                  .map((_, i) => (
                    <span key={i} className="text-yellow-300">
                      ★
                    </span>
                  ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Review Form */}
      <div className="mt-6 border-t pt-6">
        <h4 className="text-lg font-bold text-black mb-4">Add Your Review</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            value={newReview.name}
            onChange={handleInputChange}
            placeholder="Your Name"
            className="p-2 border rounded-lg text-black"
          />
          <input
            type="text"
            name="position"
            value={newReview.position}
            onChange={handleInputChange}
            placeholder="Your Position"
            className="p-2 border rounded-lg text-black"
          />
          <select
            name="rating"
            value={newReview.rating}
            onChange={handleInputChange}
            className="p-2 border rounded-lg text-black"
          >
            <option value="0">Select Rating</option>
            {[1, 2, 3, 4, 5].map((rating) => (
              <option key={rating} value={rating}>
                {rating} Star{rating > 1 && "s"}
              </option>
            ))}
          </select>
          <textarea
            name="review"
            value={newReview.review}
            onChange={handleInputChange}
            placeholder="Write your review..."
            className="p-2 border rounded-lg text-black col-span-1 sm:col-span-2"
            rows={3}
          ></textarea>
        </div>
        <button
          onClick={handleAddReview}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Submit Review
        </button>
      </div>
    </div>
  );
};

export default ReviewsSection;
