import Link from "next/link";
import { useRouter } from "next/router";

export default function Sidebar() {
  const router = useRouter();

  return (
    <div className="w-64 h-screen bg-gray-800 text-white fixed">
      <div className="p-6">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      </div>
      <nav className="mt-10">
        <ul className="space-y-4 px-4">
          <li>
            <Link href="/admin">
              <a
                className={`block py-2 px-4 rounded-md ${
                  router.pathname === "/admin" ? "bg-gray-700" : "hover:bg-gray-700"
                }`}
              >
                Dashboard
              </a>
            </Link>
          </li>
          <li>
            <Link href="/admin/users">
              <a
                className={`block py-2 px-4 rounded-md ${
                  router.pathname === "/admin/users" ? "bg-gray-700" : "hover:bg-gray-700"
                }`}
              >
                Manage Users
              </a>
            </Link>
          </li>
          <li>
            <Link href="/admin/products">
              <a
                className={`block py-2 px-4 rounded-md ${
                  router.pathname === "/admin/products" ? "bg-gray-700" : "hover:bg-gray-700"
                }`}
              >
                Manage Products
              </a>
            </Link>
          </li>
          <li>
            <Link href="/admin/orders">
              <a
                className={`block py-2 px-4 rounded-md ${
                  router.pathname === "/admin/orders" ? "bg-gray-700" : "hover:bg-gray-700"
                }`}
              >
                Manage Orders
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
