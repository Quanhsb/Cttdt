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

import BaiViet2BoCongAn from "./pages/tin-tuc-su-kien/BaiViet2BoCongAn";
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

            <Route
              path="/tin-tuc-su-kien/bai-viet"
              element={<BaiViet2BoCongAn />}
            />
          </Routes>
          
          
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;