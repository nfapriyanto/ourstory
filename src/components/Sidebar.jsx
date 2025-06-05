import React, { useState } from 'react';
import CompactSidebar from './CompactSidebar';
import NormalSidebar from './NormalSidebar';

const Sidebar = ({ onSearchClick, onNotificationClick }) => {
  const [isCompactMode, setIsCompactMode] = useState(false);
  const [activeModal, setActiveModal] = useState(null); // 'search' or 'notification'

  const handleSearchClick = () => {
    console.log('Search clicked! Switching to compact mode...');
    setIsCompactMode(true);
    setActiveModal('search');
    if (onSearchClick) onSearchClick(true);
    if (onNotificationClick) onNotificationClick(false);
  };

  const handleNotificationClick = () => {
    console.log('Notification clicked! Switching to compact mode...');
    setIsCompactMode(true);
    setActiveModal('notification');
    if (onNotificationClick) onNotificationClick(true);
    if (onSearchClick) onSearchClick(false);
  };

  const handleBackToNormal = () => {
    console.log('Back to normal mode...');
    setIsCompactMode(false);
    setActiveModal(null);
    if (onSearchClick) onSearchClick(false);
    if (onNotificationClick) onNotificationClick(false);
  };

  console.log('Current mode:', isCompactMode ? 'Compact' : 'Normal', 'Active modal:', activeModal);

  // Render komponen berdasarkan mode
  if (isCompactMode) {
    return (
      <CompactSidebar 
        activeModal={activeModal}
        onSearchClick={handleSearchClick}
        onNotificationClick={handleNotificationClick}
        onBackToNormal={handleBackToNormal}
      />
    );
  }

  return (
    <NormalSidebar 
      onSearchClick={handleSearchClick}
      onNotificationClick={handleNotificationClick}
    />
  );
};

export default Sidebar;