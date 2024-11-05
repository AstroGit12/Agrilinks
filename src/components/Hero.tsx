import React from 'react';
import { ArrowRight, Leaf, Shield, Users } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 lg:mt-16 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">From Khet to Kharidar</span>
                <span className="block text-green-600 mt-2">Revolutionizing Agriculture</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Bridging the gap between farmers and buyers, creating a sustainable ecosystem that empowers agricultural communities and ensures quality produce for consumers.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <button 
                    onClick={() => window.location.href = '#/login'}
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10"
                  >
                    Join Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <button 
                    onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200 md:py-4 md:text-lg md:px-10"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </main>

          <div id="features" className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3 lg:gap-16">
            <div className="text-center">
              <div className="flex justify-center">
                <Leaf className="h-12 w-12 text-green-600" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Direct Farm to Market</h3>
              <p className="mt-2 text-base text-gray-500">Eliminate middlemen and maximize farmer profits</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center">
                <Users className="h-12 w-12 text-green-600" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Community Driven</h3>
              <p className="mt-2 text-base text-gray-500">Connect with local farmers and buyers</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center">
                <Shield className="h-12 w-12 text-green-600" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Quality Assured</h3>
              <p className="mt-2 text-base text-gray-500">Verified products and fair prices</p>
            </div>
          </div>

          <div className="mt-16 bg-green-50 py-12 px-4 sm:px-6 lg:px-8 rounded-lg">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-extrabold text-gray-900">Why Choose Agrilinks?</h2>
              <p className="mt-4 text-lg text-gray-500">
                We're transforming agricultural commerce by connecting farmers directly with buyers. Our platform ensures fair prices, quality produce, and a sustainable future for Indian agriculture.
              </p>
              <div className="mt-8 flex justify-center">
                <div className="inline-flex rounded-md shadow">
                  <button
                    onClick={() => window.location.href = '#/shop'}
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
                  >
                    Explore Products
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
          alt="Agricultural field"
        />
      </div>
    </div>
  );
}