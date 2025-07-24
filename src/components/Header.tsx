import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="logo-section">
          <img src="/images/logo.png" alt="Logo" className="logo" />
        </div>
        <div className="search-section">
          <input type="text" placeholder="Tìm kiếm..." />
        </div>
      </div>
    </header>
  );
}
