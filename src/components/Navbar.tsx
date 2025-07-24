import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="menu">
        <li className="menu-item home-button">Trang chủ</li>
        {/* --- Giới thiệu --- */}
        <li className="menu-item">
          Giới thiệu
          <ul className="dropdown">
            <li className="dropdown-item has-submenu">
              <span className="label">
                Lãnh đạo Bộ
                <span className="arrow">▶</span>
              </span>
              <ul className="sub-dropdown">
                <li>Lãnh đạo Bộ đương nhiệm</li>
                <li>Lãnh đạo Bộ qua các thời kỳ</li>
              </ul>
            </li>
            <li className="dropdown-item">Chức năng nhiệm vụ</li>
            <li className="dropdown-item">Lịch sử phát triển</li>
          </ul>
        </li>

        {/* --- Tin tức sự kiện --- */}
        <li className="menu-item">
          Tin tức sự kiện
          <ul className="dropdown">
            <li className="dropdown-item has-submenu">
              <span className="label">
                Hoạt động của lực lượng Công an
                <span className="arrow">▶</span>
              </span>
              <ul className="sub-dropdown">
                <li>Hoạt động của Bộ</li>
                <li>Hoạt động của địa phương</li>
              </ul>
            </li>
            <li className="dropdown-item">Chỉ đạo điều hành</li>
            <li className="dropdown-item">Thông tin đối ngoại</li>
            <li className="dropdown-item">Tin an ninh trật tự</li>
            <li className="dropdown-item">Người tốt, việc tốt</li>
            <li className="dropdown-item">Hoạt động xã hội</li>
          </ul>
        </li>

        {/* --- Phổ biến GDPL --- */}
        <li className="menu-item">
          Phổ biến, Giáo dục pháp luật
          {/* Chưa có menu con – nếu có thì bổ sung sau */}
        </li>

        {/* --- Bộ với công dân --- */}
        <li className="menu-item">
          Bộ với công dân
          <ul className="dropdown">
            <li className="dropdown-item">Hỏi đáp</li>
            <li className="dropdown-item">Lịch tiếp công dân</li>
          </ul>
        </li>

        {/* --- Thống kê --- */}
        <li className="menu-item">
          Thống kê
          <ul className="dropdown">
            <li className="dropdown-item">Phòng, chống tội phạm và VPPL</li>
            <li className="dropdown-item">Quản lý hành chính về trật tự xã hội</li>
            <li className="dropdown-item">Quản lý xuất nhập cảnh</li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
