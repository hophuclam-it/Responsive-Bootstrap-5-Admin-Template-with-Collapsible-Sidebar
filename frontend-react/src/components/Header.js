const Header = ({ toggleSidebar }) => (
    <header className="d-flex justify-content-between align-items-center px-3 bg-primary text-white" style={{ height: '60px' }}>
      <button className="btn btn-link text-white" onClick={toggleSidebar}>
        <i className="fas fa-bars"></i> Smart Seller
      </button>
    </header>
  );
  export default Header;
  