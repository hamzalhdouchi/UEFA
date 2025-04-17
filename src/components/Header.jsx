import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-900 shadow-md py-4">
      <div className="container mx-auto px-4">
        <Link to="/" className="flex items-center justify-center">
          <div className="w-10 h-10 rounded-full bg-white mr-2"></div>
          <span className="text-xl font-bold">UEFA Champions League</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;