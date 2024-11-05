import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Login from './components/Login';
import Shop from './components/Shop';
import ComingSoon from './components/ComingSoon';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Hero />;
      case 'login':
        return <Login />;
      case 'shop':
        return <Shop />;
      case 'coming-soon':
        return <ComingSoon />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar setCurrentPage={setCurrentPage} currentPage={currentPage} />
      <div className="pt-16">
        {renderPage()}
      </div>
    </div>
  );
}

export default App;