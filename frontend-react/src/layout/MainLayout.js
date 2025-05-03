import { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import './MainLayout.css';

const MainLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <Header toggleSidebar={() => setCollapsed(!collapsed)} />
      <div className="d-flex" style={{ height: 'calc(100vh - 60px)' }}>
        <Sidebar collapsed={collapsed} />
        <div className="flex-grow-1 d-flex flex-column">
          <main className="p-3 flex-grow-1 overflow-auto bg-light">{children}</main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
