import React from 'react';
import { Clock, Mail } from 'lucide-react';

export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8 text-center">
        <Clock className="mx-auto h-12 w-12 text-green-600" />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Coming Soon</h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          We're working hard to bring you something amazing. Stay tuned!
        </p>
        
        <div className="mt-8">
          <div className="grid grid-cols-4 gap-4 text-center">
            <div className="bg-green-50 rounded-lg p-4">
              <span className="block text-2xl font-bold text-green-600">30</span>
              <span className="text-sm text-gray-500">Days</span>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <span className="block text-2xl font-bold text-green-600">24</span>
              <span className="text-sm text-gray-500">Hours</span>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <span className="block text-2xl font-bold text-green-600">59</span>
              <span className="text-sm text-gray-500">Minutes</span>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <span className="block text-2xl font-bold text-green-600">60</span>
              <span className="text-sm text-gray-500">Seconds</span>
            </div>
          </div>
        </div>
        
        <div className="mt-8">
          <form className="mt-3 sm:flex">
            <label htmlFor="email" className="sr-only">Email</label>
            <div className="relative rounded-md shadow-sm flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="email"
                name="email"
                id="email"
                className="focus:ring-green-500 focus:border-green-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                placeholder="Enter your email"
              />
            </div>
            <button
              type="submit"
              className="mt-3 w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
            >
              Notify me
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}