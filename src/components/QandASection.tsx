import "./QandASection.css";

export default function QandASection() {
  return (
    <section className="qanda-section">
      <h2 className="section-title">Hỏi đáp pháp luật</h2>
      <div className="qanda-list">
        <div className="qanda-item">
          <p className="question">
            <strong>Hỏi:</strong> Khi nào được cấp lại thẻ CCCD gắn chip?
          </p>
          <p className="answer">
            <strong>Đáp:</strong> Theo quy định tại Điều 23 Luật CCCD, người dân được cấp lại thẻ khi bị mất, hỏng, hoặc thay đổi thông tin cá nhân.
          </p>
        </div>
        <div className="qanda-item">
          <p className="question">
            <strong>Hỏi:</strong> Thời gian xử lý đăng ký xe là bao lâu?
          </p>
          <p className="answer">
            <strong>Đáp:</strong> Trong vòng 2 ngày làm việc kể từ khi tiếp nhận đầy đủ hồ sơ theo quy định.
          </p>
        </div>
        <div className="qanda-item">
          <p className="question">
            <strong>Hỏi:</strong> Có được ủy quyền làm hộ chiếu không?
          </p>
          <p className="answer">
            <strong>Đáp:</strong> Không. Người làm hộ chiếu phải trực tiếp đến nộp hồ sơ, trừ trường hợp người dưới 14 tuổi.
          </p>
        </div>
      </div>
    </section>
  );
}
