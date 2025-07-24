import "./MainNews.css";
import { useNavigate } from "react-router-dom";

export default function MainNews() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(
      "/tin-tuc-su-kien/bai-viet/cong-an-tinh-nghe-an-khan-truong-tich-cuc-giup-nhan-dan-khac-phuc-hau-qua-con-bao-so-3"
    );
  };

  return (
    <div className="main-news" onClick={handleClick} style={{ cursor: "pointer" }}>
      <img
        src="https://bocongan.gov.vn/knd/tt/PublishingImages/NguyenPhuongAnh/2025/7/gen-h-xa%20anh%20son1.jpg?RenditionID=7"
        alt="Ảnh tin nổi bật"
      />
      <div className="news-content">
        <h2>Công an tỉnh Nghệ An khẩn trương, tích cực giúp Nhân dân khắc phục hậu quả cơn bão số 3</h2>
        <p>Trước diễn biến phức tạp của mưa lũ do ảnh hưởng hoàn lưu bão số 3 (bão Wipha), Công an tỉnh Nghệ An đã và đang căng mình hỗ trợ Nhân dân khắc phục hậu quả, sớm ổn định cuộc sống.</p>
      </div>
    </div>
  );
}
