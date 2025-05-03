import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import useSidebar from './hooks/useSidebar';
import './App.css';

function App() {
  const { isSidebarOpen, isCollapsed, handleToggleSidebar, setIsSidebarOpen } = useSidebar();

  return (
    <div>
      <Header
        onToggle={handleToggleSidebar}
        isSidebarOpen={isSidebarOpen}
        isCollapsed={isCollapsed}
      />

      {/* Overlay cho mobile */}
      <div
        id="overlay"
        className={`overlay ${isSidebarOpen ? 'show' : ''}`}
        onClick={() => setIsSidebarOpen(false)}
      />

      {/* Wrapper thay đổi theo trạng thái collapsed */}
      <div className={`wrapper ${isCollapsed ? 'sidebar-collapsed' : ''}`}>
        <Sidebar isSidebarOpen={isSidebarOpen} isCollapsed={isCollapsed} />
        <div className="content-area">
          <main>
            <h1>Welcome to Smart Seller</h1>
            <p style={{ height: '1000px' }}>This is your main content area.</p>


          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
