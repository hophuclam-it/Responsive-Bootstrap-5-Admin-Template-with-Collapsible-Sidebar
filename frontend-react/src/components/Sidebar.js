import { Link } from 'react-router-dom';

const Sidebar = ({ collapsed }) => (
  <nav className={`bg-dark text-light ${collapsed ? 'sidebar-collapsed' : ''}`} style={{ width: collapsed ? '70px' : '200px', transition: 'width 0.3s' }}>
    <ul className="nav flex-column pt-3">
      <li className="nav-item">
        <Link className="nav-link text-light" to="/"><i className="fas fa-cogs"></i> {!collapsed && 'Hệ Thống'}</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-light" to="/products"><i className="fas fa-box"></i> {!collapsed && 'Sản Phẩm'}</Link>
      </li>
      {/* Add more */}
    </ul>
  </nav>
);
export default Sidebar;
