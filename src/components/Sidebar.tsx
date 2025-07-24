// Sidebar.tsx
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="box">
        <img src="/images/botrong_4sao1.jpg" alt="Bộ trưởng" />
      </div>
      <div className="box">
        <h3>Chỉ đạo điều hành</h3>
        <ul>
          <li><a href="#">Kết luận chỉ đạo mới nhất</a></li>
          <li><a href="#">Thông báo văn bản</a></li>
        </ul>
      </div>
    </aside>
  );
}
