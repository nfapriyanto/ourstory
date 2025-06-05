import React, { useState } from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import SearchModal from './SearchModal';
import NotificationModal from './NotificationModal';

const LandingPage = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  const handleSearchOpen = (isOpen) => {
    setIsSearchOpen(isOpen);
    // Close notification modal when search opens
    if (isOpen) setIsNotificationOpen(false);
  };

  const handleSearchClose = () => {
    setIsSearchOpen(false);
  };

  const handleNotificationOpen = (isOpen) => {
    setIsNotificationOpen(isOpen);
    // Close search modal when notification opens
    if (isOpen) setIsSearchOpen(false);
  };

  const handleNotificationClose = () => {
    setIsNotificationOpen(false);
  };

  return (
    <div className="w-screen h-screen bg-black relative overflow-hidden">
      <Sidebar 
        onSearchClick={handleSearchOpen} 
        onNotificationClick={handleNotificationOpen}
      />
      <SearchModal isOpen={isSearchOpen} onClose={handleSearchClose} />
      <NotificationModal isOpen={isNotificationOpen} onClose={handleNotificationClose} />
      <MainContent />
    </div>
  );
};

export default LandingPage;