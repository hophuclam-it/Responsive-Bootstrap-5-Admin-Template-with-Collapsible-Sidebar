import React from 'react';

const Sidebar = ({ isSidebarOpen, isCollapsed }) => {
  const isMobile = window.innerWidth <= 768;
  const sidebarClass = isMobile
    ? isSidebarOpen ? 'show' : ''
    : isCollapsed ? 'collapsed' : '';

  return (
    <nav
      id="sidebar"
      className={sidebarClass}
    >
      <ul className="nav flex-column">
        <li className="nav-item">
          <a className="nav-link active" href="#">
            <i className="fas fa-cogs"></i>
            <span className="item-text">Hệ Thống</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <i className="fas fa-user-tie"></i>
            <span className="item-text">Khách Hàng</span>
          </a>
        </li>
        {/* Thêm nav-item khác nếu cần */}
      </ul>
    </nav>
  );
};

export default Sidebar;
