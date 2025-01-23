"use client";

import { useEffect, useState } from "react";
import Sidebar from "@/app/Components/Sidebar";

export default function AdminDashboard() {
  const [stats, setStats] = useState({ revenue: 0, orders: 0, users: 0 });

  useEffect(() => {
    // Fetch stats from the API
    fetch("/api/admin/stats")
      .then((res) => res.json())
      .then((data) => setStats(data))
      .catch((err) => console.error("Error fetching stats:", err));
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold">Revenue</h2>
            <p>${stats.revenue}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold">Orders</h2>
            <p>{stats.orders}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold">Users</h2>
            <p>{stats.users}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
