import React, { useState } from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import SearchModal from './SearchModal';

const LandingPage = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchOpen = (isOpen) => {
    setIsSearchOpen(isOpen);
  };

  const handleSearchClose = () => {
    setIsSearchOpen(false);
  };

  return (
    <div className="w-screen h-screen bg-black relative overflow-hidden">
      <Sidebar onSearchClick={handleSearchOpen} />
      <SearchModal isOpen={isSearchOpen} onClose={handleSearchClose} />
      <MainContent />
    </div>
  );
};

export default LandingPage;