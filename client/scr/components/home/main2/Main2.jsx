import "./main2.css";
import coWorking from "../../../img/co-working-space.jpg";
import React, { useEffect } from "react";

const Main2 = () => {
  // Sử dụng useEffect để thêm logic cuộn chuột
  useEffect(() => {
    // Lấy tất cả các phần tử .main2-percent-bar
    const percentBars = document.querySelectorAll(
      ".main2-percent-bar, .main2-percent-bar-2, .main2-percent-bar-3"
    );

    // Thêm một sự kiện cuộn chuột
    window.addEventListener("scroll", () => {
      // Lặp qua từng phần tử
      percentBars.forEach((bar) => {
        // Lấy vị trí hiện tại của phần tử
        const position = bar.getBoundingClientRect();
        // Kiểm tra nếu phần tử nằm trong tầm nhìn của trình duyệt
        if (position.top >= 0 && position.bottom <= window.innerHeight) {
          // Loại bỏ class "hidden" và thêm class "visible" để hiển thị phần tử
          bar.classList.remove("hidden");
          bar.classList.add("visible");
        }
      });
    });
  }, []);

  return (
    <div className="main2">
      <div className="main2-empty-space"></div>
      <div className="main2-title-box">
        <h1 className="main2-title">
          TẠI SAO NÊN CHỌN KHÔNG GIAN{" "}
          <b>CHO THUÊ VĂN PHÒNG TẠI SKY OFFICE COWORKING SPACE</b>
        </h1>
      </div>
      <div className="main1-empty-space"></div>
      <div className="main2-column-top">
        <div className="main2-column-top-lr-box">
          <div className="main2-column-lr-inner">
            <span className="material-symbols-outlined">
              supervisor_account
            </span>
            <div className="main2-column-top-text-box">
              <div className="main2-column-top-text-bold">CHUYÊN NGHIỆP</div>
              <p className="main2-column-top-desc">
                Xây dựng một hình ảnh doanh nghiệp chuyên nghiệp trong mắt đối
                tác của bạn thông qua không gian văn phòng cho thuê hiện đại của
                Sky Office.
              </p>
            </div>
          </div>
          <div className="main2-column-lr-inner">
            <span className="material-symbols-outlined">lan</span>
            <div className="main2-column-top-text-box">
              <div className="main2-column-top-text-bold">KẾT NỐI</div>
              <p className="main2-column-top-desc">
                Giải pháp cho thuê Văn phòng công ty thông minh - Văn phòng chia
                sẻ tạo nên một cộng đồng các doanh nghiệp trong và ngoài nước,
                mở ra những cơ hội kết nối mới.
              </p>
            </div>
          </div>
          <div className="main2-column-lr-inner">
            <span className="material-symbols-outlined">electric_bolt</span>
            <div className="main2-column-top-text-box">
              <div className="main2-column-top-text-bold">LINH HOẠT</div>
              <p className="main2-column-top-desc">
                Sky Office cho thuê văn phòng trọn gói linh hoạt thời gian với 4
                hình thức: Theo giờ, theo ngày, theo tuần và theo tháng.
              </p>
            </div>
          </div>
          <div className="main2-column-lr-inner">
            <span className="material-symbols-outlined">groups</span>
            <div className="main2-column-top-text-box">
              <div className="main2-column-top-text-bold">AN TÂM</div>
              <p className="main2-column-top-desc">
                Luôn sát cánh, hỗ trợ các doanh nghiệp như một người bạn đồng
                hành tận tâm. Bạn sẽ thực sự an tâm khi thuê văn phòng thông
                minh tại Sky Office.
              </p>
            </div>
          </div>
          <div className="main2-column-lr-inner">
            <span className="material-symbols-outlined">devices</span>
            <div className="main2-column-top-text-box">
              <div className="main2-column-top-text-bold">HIỆN ĐẠI</div>
              <p className="main2-column-top-desc">
                Sky Office được trang bị những trang thiết bị văn phòng hiện đại
                hàng đầu Việt Nam, giúp bộ máy của bạn hoạt động trơn tru hơn.
              </p>
            </div>
          </div>
        </div>
        <div className="main2-column-top-mid-box">
          <img src={coWorking} alt="" className="main2-img" />
        </div>
        <div className="main2-column-top-lr-box">
          <div className="main2-column-lr-inner">
            <span className="material-symbols-outlined">savings</span>
            <div className="main2-column-top-text-box">
              <div className="main2-column-top-text-bold">TIẾT KIỆM</div>
              <p className="main2-column-top-desc">
                Sky Office tin rằng văn phòng chia sẻ sẽ giúp bạn tiết kiệm
                nhiều thời gian quản lý và chi phí hoạt động. Đem lại những giá
                trị cốt lõi cho bạn!
              </p>
            </div>
          </div>
          <div className="main2-column-lr-inner">
            <span className="material-symbols-outlined">redeem</span>
            <div className="main2-column-top-text-box">
              <div className="main2-column-top-text-bold">ƯU ĐÃI</div>
              <p className="main2-column-top-desc">
                Luôn có những chính sách ưu đãi với các gói dịch vụ cho thuê Văn
                Phòng công ty thông minh - Coworking Space tại Hà Nội cho những
                khách hàng thân thiết.
              </p>
            </div>
          </div>
          <div className="main2-column-lr-inner">
            <span className="material-symbols-outlined">
              approval_delegation
            </span>
            <div className="main2-column-top-text-box">
              <div className="main2-column-top-text-bold">HIỆU QUẢ</div>
              <p className="main2-column-top-desc">
                Giải pháp cho thuê văn phòng chia sẻ - văn phòng thông minh giúp
                doanh nghiệp lựa chọn dịch vụ phù hợp để đạt hiệu quả tốt nhất.
              </p>
            </div>
          </div>
          <div className="main2-column-lr-inner">
            <span className="material-symbols-outlined">call_quality</span>
            <div className="main2-column-top-text-box">
              <div className="main2-column-top-text-bold">DỊCH VỤ HỖ TRỢ</div>
              <p className="main2-column-top-desc">
                Cho thuê văn phòng coworking tư vấn thành lập Doanh nghiệp,
                thiết kế website, kế toán, biên - phiên dịch, soạn thảo văn bản,
                chữ ký số, hóa đơn điện tử, BHXH điện tử...
              </p>
            </div>
          </div>
          <div className="main2-column-lr-inner">
            <span className="material-symbols-outlined">health_and_safety</span>
            <div className="main2-column-top-text-box">
              <div className="main2-column-top-text-bold">
                RIÊNG TƯ - BẢO MẬT
              </div>
              <p className="main2-column-top-desc">
                Không gian văn phòng Sky Office được thiết kế riêng tư cho từng
                doanh nghiệp. Camera an ninh và Bảo vệ 24/7 giúp bạn an toàn
                tuyệt đối.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="main2-column-bot">
        <div className="main2-column-bot-left">
          <div className="main2-box-left">
            <div className="main2-process-bar">
              <div className="main2-bot-left-title-box">
                <span className="main2-bot-left-title">TIỆN ÍCH</span>
                <span className="main2-bot-percent">100%</span>
              </div>
              <div className="main2-percent-bar-box">
                <div
                  className="main2-percent-bar"
                  data-percent="100"
                  // style={{ width: "100%" }}
                ></div>
              </div>
            </div>
            <div className="main2-process-bar">
              <div className="main2-bot-left-title-box">
                <span className="main2-bot-left-title">TỐI ƯU CHI PHÍ</span>
                <span className="main2-bot-percent">90%</span>
              </div>
              <div className="main2-percent-bar-box">
                <div
                  className="main2-percent-bar-2"
                  data-percent="90"
                  // style={{ width: "90%" }}
                ></div>
              </div>
            </div>
            <div className="main2-process-bar">
              <div className="main2-bot-left-title-box">
                <span className="main2-bot-left-title">
                  TRANG THIẾT BỊ VĂN PHÒNG
                </span>
                <span className="main2-bot-percent">100%</span>
              </div>
              <div className="main2-percent-bar-box">
                <div
                  className="main2-percent-bar"
                  data-percent="100"
                  // style={{ width: "100%" }}
                ></div>
              </div>
            </div>
            <div className="main2-process-bar">
              <div className="main2-bot-left-title-box">
                <span className="main2-bot-left-title">HỆ SINH THÁI</span>
                <span className="main2-bot-percent">100%</span>
              </div>
              <div className="main2-percent-bar-box">
                <div
                  className="main2-percent-bar"
                  data-percent="100"
                  // style={{ width: "100%" }}
                ></div>
              </div>
            </div>
            <div className="main2-process-bar">
              <div className="main2-bot-left-title-box">
                <span className="main2-bot-left-title">
                  KHÁCH HÀNG HÀI LÒNG
                </span>
                <span className="main2-bot-percent">95%</span>
              </div>
              <div className="main2-percent-bar-box">
                <div
                  className="main2-percent-bar-3"
                  data-percent="95"
                  // style={{ width: "95%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className="main2-column-bot-right">
          <div className="main2-bot-box-right">
            <p className="main2-bot-box-right-text">
              <strong> Sky Office </strong>
              đem đến các giải pháp dịch vụ cho thuê văn phòng như:
              <strong>
                {" "}
                Văn phòng ảo – Văn phòng trọn gói – Văn phòng chia sẻ – Chỗ ngồi
                làm việc – Phòng họp – Coworking Space{" "}
              </strong>
              giúp bạn tối ưu 80% chi phí nhưng vẫn có được một không gian và
              môi trường làm việc văn phòng chuyên nghiệp.
            </p>
            <p className="main2-bot-box-right-text">
              Đến với
              <strong> Sky Office </strong>
              bạn sẽ được tận hưởng dịch vụ
              <strong> cho thuê văn phòng tại Hà Nội </strong>
              hoàn hảo và những trải nghiệm tốt nhất. Không những được thiết kế
              bởi các kiến trúc sư hàng đầu,
              <strong> văn phòng cho thuê </strong>
              còn được trang bị bởi những thiết bị văn phòng hiện đại nhất.
            </p>
            <p className="main2-bot-box-right-text">
              <strong> Sky Office Coworking Space </strong>
              sẽ hỗ trợ mọi nhu cầu của Doanh nghiệp bạn khi cần, cùng bạn tiến
              tới thành công!
            </p>
          </div>
        </div>
      </div>
      <div className="main2-empty-space"></div>
    </div>
  );
};

export default Main2;
