import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';  // Bootstrap CSS
import 'font-awesome/css/font-awesome.min.css';  // Font Awesome

function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    if (window.innerWidth <= 768) {
      setSidebarVisible(!sidebarVisible);
    } else {
      setSidebarCollapsed(!sidebarCollapsed);
    }
  };

  const closeSidebar = () => {
    setSidebarVisible(false);
  };

  return (
    <div className="App">
      <header className="header">
        <button
          className="toggle-btn"
          id="toggleSidebar"
          aria-label="Toggle sidebar"
          aria-expanded={sidebarVisible ? 'true' : 'false'}
          onClick={toggleSidebar}
        >
          <i className="fa fa-bars"></i> Smart Seller
        </button>
      </header>

      {/* Overlay for mobile */}
      {sidebarVisible && <div id="overlay" onClick={closeSidebar}></div>}

      <div className="wrapper">
        <nav
          id="sidebar"
          className={sidebarCollapsed ? 'collapsed' : ''}>
          <ul className="nav flex-column pt-3">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                <i className="fa fa-cogs"></i>
                <span className="item-text">Hệ Thống</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="fa fa-box"></i>
                <span className="item-text">Sản Phẩm</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="fa fa-user-tie"></i>
                <span className="item-text">Khách Hàng</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="fa fa-shopping-cart"></i>
                <span className="item-text">Đơn Hàng</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="fa fa-users"></i>
                <span className="item-text">Nhân Viên</span>
              </a>
            </li>
          </ul>
        </nav>

        <div id="content">
          <main align="center">
            {/* Nội dung trang */}
            <p style={{ height: '1000px' }}>Phần này có thể cuộn lên xuống ⬆️⬇️</p>
            <p>Phần này có thể cuộn lên xuống ⬆️⬇️</p>
          </main>
          <footer>© 2025 Smart Seller</footer>
        </div>
      </div>
    </div>
  );
}

export default App;
