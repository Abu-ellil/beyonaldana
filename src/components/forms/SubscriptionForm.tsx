import React from 'react';

const SubscriptionForm = () => {
  return (
    <div className="max-w-md mx-auto p-8 bg-white shadow-2xl mt-20 rounded-lg">
      <h2 className="text-5xl font-bold text-gray-900 mb-6">
        BE THE FIRST TO KNOW ABOUT OUR EVENTS
      </h2>
      <form className="space-y-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-bold text-gray-700">
            FIRST NAME: *
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-bold text-gray-700">
            LAST NAME: *
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="phoneNumber" className="block text-sm font-bold text-gray-700">
            PHONE NUMBER
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-bold text-gray-700">
            EMAIL: *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="text-xs text-gray-600">
          I have read and agree to Beyon Al Dana Amphitheatre's
          <a href="#" className="text-red-500 hover:underline"> Conditions of Entry</a> and
          <a href="#" className="text-red-500 hover:underline"> Privacy Policy</a>. Keep an eye on your inbox
          as we will be sending you information about exciting upcoming
          events, news and more. You can unsubscribe at any time by
          clicking on the link in the footer of any e-mail. If you have any
          further questions, please e-mail us at
          <a href="mailto:info@aldana.com.bh" className="text-red-500 hover:underline"> info@aldana.com.bh</a>.
          *
        </div>
        <div className="flex items-center">
          <input
            id="agree"
            name="agree"
            type="radio"
            required
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
          />
          <label htmlFor="agree" className="ml-2 block text-sm text-gray-900 font-bold">
            I AGREE
          </label>
        </div>
        <div>
          <button
            type="submit"
            className="w- flex justify-center py-1 px-6 border border-transparent rounded-full shadow-sm text-sm font-bold text-white bg-red-400 hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
          >
            SUBSCRIBE
          </button>
        </div>
      </form>
    </div>
  );
};

export default SubscriptionForm;