import "./CategorySection.css";
import { Link } from "react-router-dom";
import { categories, categoryPairs } from "../data/categories";

const slugify = (text: string) =>
  text
    .toLowerCase()
    .normalize("NFD") // remove accents
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

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
                  return (
                    <div className="news-item" key={`${title}-${i}`}>
                      {article.img && (
                        <img src={article.img} alt="Ảnh tin" />
                      )}
                      <Link
                        to={`/tin-tuc-su-kien/bai-viet?category=${encodeURIComponent(
                          title
                        )}&slug=${slug}`}
                      >
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
