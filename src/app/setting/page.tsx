// "use client";
// import { useState } from "react";

// const SettingsPage = () => {
//   const [profile, setProfile] = useState({
//     name: "Your Name",
//     email: "YourEmail@example.com",
//   });

//   const [notifications, setNotifications] = useState({
//     email: true,
//     sms: false,
//     push: true,
//   });

//   const [isDeletingAccount, setIsDeletingAccount] = useState(false);

//   const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setProfile({ ...profile, [name]: value });
//   };

//   const handleNotificationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, checked } = e.target;
//     setNotifications({ ...notifications, [name]: checked });
//   };

//   const handleDeleteAccount = () => {
//     setIsDeletingAccount(true);
//     setTimeout(() => {
//       alert("Your account has been deleted!");
//       setIsDeletingAccount(false);
//     }, 2000);
//   };

//   return (
//     <div className="container mx-auto py-10 px-6 max-w-4xl">
//       <h1 className="text-4xl font-extrabold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
//         Settings
//       </h1>

//       {/* Profile Settings */}
//       <section className="mb-12">
//         <h2 className="text-2xl font-bold mb-6 text-purple-600">
//           Profile Settings
//         </h2>
//         <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-8 rounded-xl shadow-md space-y-6">
//           <div>
//             <label className="block font-medium text-gray-800 mb-2">Name</label>
//             <input 
//               type="text"
//               name="name"
//               value={profile.name}
//               onChange={handleProfileChange}
//               className="w-full border text-black border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
//             />
//           </div>
//           <div>
//             <label className="block font-medium text-gray-800 mb-2">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={profile.email}
//               onChange={handleProfileChange}
//               className="w-full border text-black border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
//             />
//           </div>
//           <button className="w-full bg-purple-500 text-white py-3 rounded-lg font-semibold hover:bg-purple-600 transition duration-300 shadow-md">
//             Save Changes
//           </button>
//         </div>
//       </section>

//       {/* Notification Preferences */}
//       <section className="mb-12">
//         <h2 className="text-2xl font-bold mb-6 text-pink-600">
//           Notification Preferences
//         </h2>
//         <div className="bg-gradient-to-r from-pink-100 to-red-100 p-8 rounded-xl shadow-md space-y-4">
//           {Object.keys(notifications).map((type) => (
//             <div key={type} className="flex items-center space-x-3">
//               <input
//                 type="checkbox"
//                 name={type}
//                 checked={notifications[type as keyof typeof notifications]}
//                 onChange={handleNotificationChange}
//                 className="w-5 h-5 text-pink-600 focus:ring-2 focus:ring-pink-400"
//               />
//               <span className="text-gray-800 capitalize">{type} Notifications</span>
//             </div>
//           ))}
//           <button className="w-full bg-pink-500 text-white py-3 rounded-lg font-semibold hover:bg-pink-600 transition duration-300 shadow-md">
//             Save Preferences
//           </button>
//         </div>
//       </section>

//       {/* Account Management */}
//       <section>
//         <h2 className="text-2xl font-bold mb-6 text-red-600">Account Management</h2>
//         <div className="bg-gradient-to-r from-red-100 to-orange-100 p-8 rounded-xl shadow-md text-center">
//           <p className="text-gray-700 mb-6">
//             Deleting your account is permanent and cannot be undone.
//           </p>
//           <button
//             onClick={handleDeleteAccount}
//             disabled={isDeletingAccount}
//             className={`w-full py-3 rounded-lg text-white font-bold transition duration-300 ${
//               isDeletingAccount
//                 ? "bg-red-400 cursor-not-allowed"
//                 : "bg-red-500 hover:bg-red-600"
//             } shadow-md`}
//           >
//             {isDeletingAccount ? "Deleting Account..." : "Delete Account"}
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default SettingsPage;







"use client";

import { useState } from "react";

const SettingsPage = () => {
  const [profile, setProfile] = useState({
    name: "Your Name",
    email: "YourEmail@example.com",
  });

  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true,
  });

  const [isDeletingAccount, setIsDeletingAccount] = useState(false);

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleNotificationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setNotifications({ ...notifications, [name]: checked });
  };

  const handleDeleteAccount = () => {
    setIsDeletingAccount(true);
    setTimeout(() => {
      alert("Your account has been deleted!");
      setIsDeletingAccount(false);
    }, 2000);
  };

  return (
    <div className="container mx-auto py-10 px-6 max-w-4xl">
      <h1 className="text-4xl font-extrabold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-700">
        Settings
      </h1>

      {/* Profile Settings */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-blue-600">
          Profile Settings
        </h2>
        <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-8 rounded-xl shadow-md space-y-6">
          <div>
            <label className="block font-medium text-gray-800 mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleProfileChange}
              className="w-full border text-black border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block font-medium text-gray-800 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleProfileChange}
              className="w-full border text-black border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300 shadow-md">
            Save Changes
          </button>
        </div>
      </section>

      {/* Notification Preferences */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-blue-600">
          Notification Preferences
        </h2>
        <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-8 rounded-xl shadow-md space-y-4">
          {Object.keys(notifications).map((type) => (
            <div key={type} className="flex items-center space-x-3">
              <input
                type="checkbox"
                name={type}
                checked={notifications[type as keyof typeof notifications]}
                onChange={handleNotificationChange}
                className="w-5 h-5 text-blue-600 focus:ring-2 focus:ring-blue-400"
              />
              <span className="text-gray-800 capitalize">{type} Notifications</span>
            </div>
          ))}
          <button className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300 shadow-md">
            Save Preferences
          </button>
        </div>
      </section>

      {/* Account Management */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-blue-600">
          Account Management
        </h2>
        <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-8 rounded-xl shadow-md text-center">
          <p className="text-gray-700 mb-6">
            Deleting your account is permanent and cannot be undone.
          </p>
          <button
            onClick={handleDeleteAccount}
            disabled={isDeletingAccount}
            className={`w-full py-3 rounded-lg text-white font-bold transition duration-300 ${
              isDeletingAccount
                ? "bg-red-300 cursor-not-allowed"
                : "bg-red-500 hover:bg-red-600"
            } shadow-md`}
          >
            {isDeletingAccount ? "Deleting Account..." : "Delete Account"}
          </button>
        </div>
      </section>
    </div>
  );
};

export default SettingsPage;
