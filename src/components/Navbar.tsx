import React, { useState } from 'react';
import { Menu, X, Sprout } from 'lucide-react';

interface NavbarProps {
  setCurrentPage: (page: string) => void;
  currentPage: string;
}

export default function Navbar({ setCurrentPage, currentPage }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center cursor-pointer" onClick={() => handleNavigation('home')}>
            <Sprout className="h-8 w-8 text-green-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">Agrilinks</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <button 
                onClick={() => handleNavigation('home')}
                className={`${currentPage === 'home' ? 'text-green-600' : 'text-gray-700'} hover:text-green-600 px-3 py-2 rounded-md font-medium transition-colors`}
              >
                Home
              </button>
              <button 
                onClick={() => handleNavigation('shop')}
                className={`${currentPage === 'shop' ? 'text-green-600' : 'text-gray-700'} hover:text-green-600 px-3 py-2 rounded-md font-medium transition-colors`}
              >
                Shop
              </button>
              <button 
                onClick={() => handleNavigation('coming-soon')}
                className={`${currentPage === 'coming-soon' ? 'text-green-600' : 'text-gray-700'} hover:text-green-600 px-3 py-2 rounded-md font-medium transition-colors`}
              >
                About
              </button>
              <button 
                onClick={() => handleNavigation('login')}
                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
              >
                Login
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button 
              onClick={() => handleNavigation('home')}
              className={`block w-full text-left ${currentPage === 'home' ? 'text-green-600' : 'text-gray-700'} hover:text-green-600 px-3 py-2 rounded-md font-medium`}
            >
              Home
            </button>
            <button 
              onClick={() => handleNavigation('shop')}
              className={`block w-full text-left ${currentPage === 'shop' ? 'text-green-600' : 'text-gray-700'} hover:text-green-600 px-3 py-2 rounded-md font-medium`}
            >
              Shop
            </button>
            <button 
              onClick={() => handleNavigation('coming-soon')}
              className={`block w-full text-left ${currentPage === 'coming-soon' ? 'text-green-600' : 'text-gray-700'} hover:text-green-600 px-3 py-2 rounded-md font-medium`}
            >
              Coming Soon
            </button>
            <button 
              onClick={() => handleNavigation('login')}
              className="w-full text-left bg-green-600 text-white px-3 py-2 rounded-md hover:bg-green-700"
            >
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}