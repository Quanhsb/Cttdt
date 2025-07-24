import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import BreakingNews from "./components/BreakingNews";
import HomeSection from "./components/HomeSection";
import CategorySection from "./components/CategorySection";
import VanBanSection from "./components/VanBanSection";
import Footer from "./components/Footer";
import QandASection from "./components/QandASection";
import Gallery from "./components/Gallery";
import BannerStrip from "./components/BannerStrip";

import BaiViet1BoCongAn from "./pages/tin-tuc-su-kien/BaiViet1BoCongAn";
import BaiViet2BoCongAn from "./pages/tin-tuc-su-kien/BaiViet2BoCongAn";
import BaiViet3XaHoi from "./pages/tin-tuc-su-kien/BaiViet3XaHoi"; // ví dụ bài viết thứ 3

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container">
          <Navbar />
          <BreakingNews />

          <Routes>
            {/* Trang chủ */}
            <Route
              path="/"
              element={
                <>
                  <HomeSection />
                  <CategorySection />
                  <VanBanSection />
                  <QandASection />
                  <Gallery />
                  <BannerStrip />
                </>
              }
            />

            {/* Route riêng cho từng bài viết */}
            <Route
              path="/tin-tuc-su-kien/bai-viet/xung-dang-la-cho-dua-vung-chac-cua-dang-bo"
              element={<BaiViet1BoCongAn />}
            />
            <Route
              path="/tin-tuc-su-kien/bai-viet/trien-khai-cong-tac-dac-xa-nam-2025-dot-2"
              element={<BaiViet2BoCongAn />}
            />
            <Route
              path="/tin-tuc-su-kien/bai-viet/bai-viet-3-xa-hoi"
              element={<BaiViet3XaHoi />}
            />
            {/* Thêm các route cho các bài viết khác ở đây */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;