'use client'
import { useState } from "react";

const CheckoutPage = () => {
  const [billingInfo, setBillingInfo] = useState({
    firstName: "",
    companyName: "",
    streetAddress: "",
    apartment: "",
    townCity: "",
    phoneNumber: "",
    emailAddress: "",
  });

  const [paymentMethod, setPaymentMethod] = useState<string>("bank");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBillingInfo({ ...billingInfo, [e.target.name]: e.target.value });
  };

  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Billing Info:", billingInfo);
    console.log("Payment Method:", paymentMethod);
  };

  return (
    <div className="container mx-auto p-6">
        {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-4">
        <ul className="flex space-x-2">
          <li>Account</li>
          <li>/</li>
          <li>My Account</li>
          <li>/</li>
          <li>Product</li>
          <li>/</li>
          <li>View Cart</li>
          <li>/</li>
          <li className="text-black font-medium">Checkout</li>
        </ul>
      </nav>

      <h1 className="text-3xl font-bold mb-4">Checkout</h1>
      <form onSubmit={handleSubmit}
      className="flex flex-wrap justify-between items-center mt-5" 
      >
        
        {/* Billing Details Form */}
        <div className=" w-full md:w-1/2 lg:w-1/2 p-10">
          <h2 className="text-2xl font-semibold mb-4">Billing Details</h2>
          <div>
            <div>
              <label className="block text-sm font-medium mb-2">First Name*</label>
              <input
                type="text"
                name="firstName"
                value={billingInfo.firstName}
                onChange={handleInputChange}
                required
                className="w-full border px-4 py-2 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Company Name</label>
              <input
                type="text"
                name="companyName"
                value={billingInfo.companyName}
                onChange={handleInputChange}
                className="w-full border px-4 py-2 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Street Address*</label>
              <input
                type="text"
                name="streetAddress"
                value={billingInfo.streetAddress}
                onChange={handleInputChange}
                required
                className="w-full border px-4 py-2 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Apartment, floor, etc. (optional)</label>
              <input
                type="text"
                name="apartment"
                value={billingInfo.apartment}
                onChange={handleInputChange}
                className="w-full border px-4 py-2 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Town/City*</label>
              <input
                type="text"
                name="townCity"
                value={billingInfo.townCity}
                onChange={handleInputChange}
                required
                className="w-full border px-4 py-2 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Phone Number*</label>
              <input
                type="text"
                name="phoneNumber"
                value={billingInfo.phoneNumber}
                onChange={handleInputChange}
                required
                className="w-full border px-4 py-2 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email Address*</label>
              <input
                type="email"
                name="emailAddress"
                value={billingInfo.emailAddress}
                onChange={handleInputChange}
                required
                className="w-full border px-4 py-2 rounded"
              />
            </div>
          </div>

          <div className="mt-4 flex items-center">
            <input type="checkbox" id="save-info" className="mr-2" />
            <label htmlFor="save-info" className="text-sm">
              Save this information for faster check-out next time
            </label>
          </div>
        </div>

        {/* Order Summary */}
        <div className="w-full md:w-1/2 lg:w-1/2  p-10">
          <h2 className="text-2xl font-semibold mb-4">Your Order</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span>LCD Monitor</span>
              <span>$650</span>
            </div>
            <div className="flex justify-between">
              <span>H1 Gamepad</span>
              <span>$1100</span>
            </div>
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>$1750</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping:</span>
              <span className="text-green-500">Free</span>
            </div>
            <div className="flex justify-between text-xl font-bold">
              <span>Total:</span>
              <span>$1750</span>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Payment Method</h3>
            <div className="flex items-center mb-2">
              <input
                type="radio"
                id="bank"
                value="bank"
                checked={paymentMethod === "bank"}
                onChange={handlePaymentChange}
                className="mr-2"
              />
              <label htmlFor="bank" className="text-sm">
                Bank
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="cod"
                value="cod"
                checked={paymentMethod === "cod"}
                onChange={handlePaymentChange}
                className="mr-2"
              />
              <label htmlFor="cod" className="text-sm">
                Cash on Delivery
              </label>
            </div>
          </div>

          {/* Coupon & Place Order */}
          <div className="mt-6">
        <div className="flex flex-wrap gap-2">
         <div>
            <input
              type="text"
              placeholder="Coupon Code"
              className=" border border-gray-700  px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-800"
              required
            />
            </div>
            <div className='flex justify-end items-end'>
            <button
            type="submit"
            className="bg-primary text-white  px-6 py-2 hover:bg-red-700 transition-colors"
          >
            Send Message
          </button>
          </div>
          </div>

        {/* place order button */}
          <div className="mt-6">
            <button
              type="submit"
              className="bg-primary hover:bg-red-600 text-white py-2 px-4"
            >
              Place Order
            </button>
            </div>

          </div>
        </div>
      </form>
    </div>
  );
};

export default CheckoutPage;

