export type Article = {
  title: string;
  img?: string;
};

export const categories: Record<string, Article[]> = {
  "HOẠT ĐỘNG CỦA BỘ CÔNG AN": [
    { title: "Xứng đáng là chỗ dựa vững chắc của Đảng bộ, chính quyền và Nhân dân Thủ đô Hà Nội", img: "https://bocongan.gov.vn/knd/tt/PublishingImages/NguyenThiLan/thang5/084a6554.jpg?width=1000" },
    { title: "Triển khai công tác đặc xá năm 2025 (đợt 2) đảm bảo chặt chẽ, đúng quy định", img: "https://bocongan.gov.vn/knd/tt/PublishingImages/NguyenPhuongAnh/2025/7/atx_2500.jpg?width=1000" },
    { title: "Đảng bộ Cục Quản lý xuất nhập cảnh tổ chức thành công Đại hội đại biểu lần thứ II, nhiệm kỳ 2025 – 2030", img: "https://bocongan.gov.vn/knd/tt/PublishingImages/NguyenThiLan/thang5/z6833405188514_5f0b64350164f78504c210708a929c9a.jpg?RenditionID=7" },
  ],
  "HOẠT ĐỘNG CỦA CÔNG AN ĐỊA PHƯƠNG": [
    { title: "Bài viết 1 - Địa phương", img: "https://via.placeholder.com/80x60" },
    { title: "Bài viết 2 - Địa phương", img: "https://via.placeholder.com/80x60" },
    { title: "Bài viết 3 - Địa phương", img: "https://via.placeholder.com/80x60" },
  ],
  "ĐỐI NGOẠI": [
    { title: "Bài viết 1 - Đối ngoại", img: "https://via.placeholder.com/80x60" },
    { title: "Bài viết 2 - Đối ngoại", img: "https://via.placeholder.com/80x60" },
    { title: "Bài viết 3 - Đối ngoại", img: "https://via.placeholder.com/80x60" },
  ],
  "AN NINH, TRẬT TỰ": [
    { title: "Bài viết 1 - An ninh", img: "https://via.placeholder.com/80x60" },
    { title: "Bài viết 2 - An ninh", img: "https://via.placeholder.com/80x60" },
    { title: "Bài viết 3 - An ninh", img: "https://via.placeholder.com/80x60" },
  ],
  "PHỔ BIẾN, GIÁO DỤC PHÁP LUẬT": [
    { title: "Bài viết 1 - Phổ biến", img: "https://via.placeholder.com/80x60" },
    { title: "Bài viết 2 - Phổ biến", img: "https://via.placeholder.com/80x60" },
    { title: "Bài viết 3 - Phổ biến", img: "https://via.placeholder.com/80x60" },
  ],
  "BỘ VỚI CÔNG DÂN": [
    { title: "Bài viết 1 - Bộ với công dân", img: "https://via.placeholder.com/80x60" },
    { title: "Bài viết 2 - Bộ với công dân", img: "https://via.placeholder.com/80x60" },
    { title: "Bài viết 3 - Bộ với công dân", img: "https://via.placeholder.com/80x60" },
  ],
  "NGƯỜI TỐT, VIỆC TỐT": [
    { title: "Bài viết 1 - Người tốt", img: "https://via.placeholder.com/80x60" },
    { title: "Bài viết 2 - Người tốt", img: "https://via.placeholder.com/80x60" },
    { title: "Bài viết 3 - Người tốt", img: "https://via.placeholder.com/80x60" },
  ],
  "HOẠT ĐỘNG XÃ HỘI": [
    { title: "Bài viết 1 - Xã hội", img: "https://via.placeholder.com/80x60" },
    { title: "Bài viết 2 - Xã hội", img: "https://via.placeholder.com/80x60" },
    { title: "Bài viết 3 - Xã hội", img: "https://via.placeholder.com/80x60" },
  ],
};

export const categoryPairs: [string, string][] = [
  ["HOẠT ĐỘNG CỦA BỘ CÔNG AN", "HOẠT ĐỘNG CỦA CÔNG AN ĐỊA PHƯƠNG"],
  ["ĐỐI NGOẠI", "AN NINH, TRẬT TỰ"],
  ["PHỔ BIẾN, GIÁO DỤC PHÁP LUẬT", "BỘ VỚI CÔNG DÂN"],
  ["NGƯỜI TỐT, VIỆC TỐT", "HOẠT ĐỘNG XÃ HỘI"],
];