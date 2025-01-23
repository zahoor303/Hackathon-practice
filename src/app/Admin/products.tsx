"use client";

import { useState, useEffect } from "react";
import Sidebar from "@/app/Components/Sidebar";

export default function Products() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    // Fetch products from API
    fetch("/api/admin/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  const handleDelete = (id: string) => {
    fetch(`/api/admin/products/${id}`, { method: "DELETE" })
      .then(() => setProducts(products.filter((product) => product.id !== id)))
      .catch((err) => console.error("Error deleting product:", err));
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6">Manage Products</h1>
        <table className="w-full bg-white rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-t">
                <td className="px-4 py-2">{product.name}</td>
                <td className="px-4 py-2">${product.price}</td>
                <td className="px-4 py-2">
                  <button
                    className="text-red-500 hover:underline"
                    onClick={() => handleDelete(product.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
