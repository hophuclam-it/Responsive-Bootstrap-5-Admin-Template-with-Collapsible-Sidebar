import React from 'react';

const Header = ({ onToggle, isSidebarOpen, isCollapsed }) => {
  const isMobile = window.innerWidth <= 768;

  return (
    <header>
      <button
        aria-label="Toggle sidebar"
        aria-expanded={isMobile ? isSidebarOpen : !isCollapsed}
        onClick={onToggle}
      >
        <i className="fas fa-bars"></i>
      </button>
      <span className="ms-2">Smart Seller</span>
    </header>
  );
};

export default Header;
