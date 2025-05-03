import { useState, useEffect } from 'react';

const useSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // mobile
  const [isCollapsed, setIsCollapsed] = useState(false);     // desktop

  const handleToggleSidebar = () => {
    if (window.innerWidth <= 768) {
      setIsSidebarOpen(prev => !prev);
    } else {
      setIsCollapsed(prev => !prev);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsSidebarOpen(false);
      }
    };

    const handleEscKey = (e) => {
      if (e.key === 'Escape') {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('keydown', handleEscKey);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('keydown', handleEscKey);
    };
  }, []);

  return {
    isSidebarOpen,
    isCollapsed,
    handleToggleSidebar,
    setIsSidebarOpen
  };
};

export default useSidebar;
