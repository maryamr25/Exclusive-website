
'use client'
import { useState } from "react";
import Link from "next/link";

const AccountPage = () => {
  const [formData, setFormData] = useState({
    firstName: "Md",
    lastName: "xyz",
    email: "xyz111@gmail.com",
    address: "peshawar ",
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Changes Saved Successfully!");
  };

  return (
    <div className="container mx-auto px-6 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-4">
        <Link href="/" className="hover:text-red-500">
          Home
        </Link>{" "}
        / <span className="text-black font-medium">My Account</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Sidebar Navigation */}
        <div className="bg-gray-50 p-6 rounded shadow">
          <h2 className="text-lg font-semibold mb-4">Manage My Account</h2>
          <ul className="space-y-4 text-gray-600">
            <li>
              <Link href="#" className="text-red-500 font-medium">
                My Profile
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-red-500">
                Address Book
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-red-500">
                My Payment Options
              </Link>
            </li>
          </ul>
          <h2 className="text-lg font-semibold mt-6 mb-4">My Orders</h2>
          <ul className="space-y-4 text-gray-600">
            <li>
              <Link href="#" className="hover:text-red-500">
                My Returns
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-red-500">
                My Cancellations
              </Link>
            </li>
          </ul>
          <h2 className="text-lg font-semibold mt-6 mb-4">My Wishlist</h2>
          <ul>
            <li>
              <Link href="#" className="hover:text-red-500">
                Wishlist Items
              </Link>
            </li>
          </ul>
        </div>

        {/* Edit Profile Form */}
        <div className="lg:col-span-2 bg-white shadow rounded p-10">
          <h2 className="text-2xl font-semibold mb-6">Edit Your Profile</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full border border-gray-200 py-1 px-3  shadow-sm focus:ring-red-500 focus:border-red-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full border border-gray-200 py-1 px-3 shadow-sm focus:ring-red-500 focus:border-red-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-200 py-1 px-3 shadow-sm focus:ring-red-500 focus:border-red-500"
                disabled
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full border border-gray-200 py-1 px-3 shadow-sm focus:ring-red-500 focus:border-red-500"
              />
            </div>

            {/* Password Fields */}
            <h3 className="text-lg font-semibold mt-6">Password Changes</h3>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Current Password
              </label>
              <input
                type="password"
                name="currentPassword"
                value={formData.currentPassword}
                onChange={handleChange}
                className="w-full border border-gray-200 py-1 px-3 shadow-sm focus:ring-red-500 focus:border-red-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                New Password
              </label>
              <input
                type="password"
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                className="w-full border border-gray-200 py-1 px-3 shadow-sm focus:ring-red-500 focus:border-red-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Confirm New Password
              </label>
              <input
                type="password"
                name="confirmNewPassword"
                value={formData.confirmNewPassword}
                onChange={handleChange}
                className="w-full border border-gray-200 py-1 px-3 shadow-sm focus:ring-red-500 focus:border-red-500"
              />
            </div>

            {/* Form Actions */}
            <div className="flex justify-end gap-4 mt-4">
              <button
                type="button"
                className="px-4 py-2 border  text-gray-700 hover:text-red-500"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-primary hover:bg-red-600 text-white"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
