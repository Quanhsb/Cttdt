import "./CategorySection.css";
import { Link } from "react-router-dom";
import { categories, categoryPairs } from "../data/categories";

const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/đ/g, "d") // fix riêng chữ đ
    .replace(/Đ/g, "d") // phòng trường hợp viết hoa
    .normalize("NFD") // tách dấu ra khỏi chữ cái
    .replace(/[\u0300-\u036f]/g, "") // xóa dấu
    .replace(/[^a-z0-9]+/g, "-") // thay ký tự không hợp lệ bằng dấu gạch ngang
    .replace(/^-+|-+$/g, ""); // xóa dấu - ở đầu/cuối

export default function CategorySection() {
  return (
    <div className="category-grid">
      {categoryPairs.map((pair, index) => (
        <div className="category-row" key={index}>
          {pair.map((title) => (
            <section key={title} className="category-section">
              <h2 className="section-title">{title}</h2>
              <div className="news-list">
                {(categories[title] || []).map((article, i) => {
                  const slug = slugify(article.title);
                  console.log(`Slug for "${article.title}": ${slug}`);
                  return (
                    <div className="news-item" key={`${title}-${i}`}>
                      {article.img && <img src={article.img} alt="Ảnh tin" />}
                      <Link to={`/tin-tuc-su-kien/bai-viet/${slug}`}>
                        {article.title}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      ))}
    </div>
  );
}
