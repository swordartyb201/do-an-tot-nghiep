import "./VPTGMain1.css";
import VPTGicon1 from "../../../img/VPTG-icon1.png";
import VPTGicon2 from "../../../img/VPTG-icon2.png";
import VPTGicon3 from "../../../img/VPTG-icon3.png";
import VPTGicon4 from "../../../img/VPTG-icon4.png";
import VPTGimg1 from "../../../img/VPTG-img1.jpg";
import VPTGimg2 from "../../../img/VPTG-img2.jpg";
import VPTGimg3 from "../../../img/VPTG-img3.jpg";
import VPTGimg4 from "../../../img/VPTG-img4.jpg";

const VPTGMain1 = () => {
  return (
    <div className="VPTG__main1">
      <div className="VPTG__main1-box1">
        <h2 className="VPTG__main1-title1">
          TẠI SAO NÊN CHỌN GIẢI PHÁP CHO THUÊ VĂN PHÒNG TRỌN GÓI TẠI SKY OFFICE?
        </h2>
        <p className="VPTG__main1-text1">
          Với ngân sách chỉ từ 5.000.000 VNĐ/tháng, bạn thuê được văn phòng ở
          đâu?
          <br /> 1 tháng doanh nghiệp của bạn phải chi cho điện – nước – mạng
          bao nhiêu tiền?
          <br /> Bạn mất bao nhiêu tiền để đầu tư setup cho 1 văn phòng mới?
        </p>
        {/* <img src={VPTGoImage} alt="" className="VPTG__main1-img" /> */}
      </div>
      <div className="VPTG__main1-box2">
        <div className="VPTG__main1-row">
          <div className="VPTG__main1-row-item">
            <img src={VPTGicon1} alt="" className="VPTG__main1-icon" />
            <h4>ĐẦY ĐỦ TIỆN ÍCH HIỆN ĐẠI & SANG TRỌNG</h4>
            <p className="VPTG__main1-text2">
              Sky Office được thiết kế chủ đạo với nội thất bằng gỗ tạo nên một
              không gian sang trọng và được trang bị đầy đủ tiện ích văn phòng
              cho bạn.
            </p>
          </div>
          <div className="VPTG__main1-row-item">
            <img src={VPTGicon2} alt="" className="VPTG__main1-icon" />
            <h4>TÍNH PHÍ TRỌN GÓI - TỐI ƯU CHI PHÍ</h4>
            <p className="VPTG__main1-text2">
              Doanh nghiệp chỉ chi trả đúng phần diện tích mà mình sử dụng,
              nhưng được sử dụng toàn bộ không gian chung như: Phòng họp - Phòng
              khách.
            </p>
          </div>
          <div className="VPTG__main1-row-item">
            <img src={VPTGicon3} alt="" className="VPTG__main1-icon" />
            <h4>TĂNG TRƯỞNG VÀ PHÁT TRIỂN DOANH NGHIỆP</h4>
            <p className="VPTG__main1-text2">
              Văn phòng trọn gói Sky Office tại các vị trí đắc địa tại Hà Nội,
              nơi hội tụ tất cả về kinh tế… là cơ hội giúp bạn mở rộng cơ hội
              giao thương
            </p>
          </div>
          <div className="VPTG__main1-row-item">
            <img src={VPTGicon4} alt="" className="VPTG__main1-icon" />
            <h4>CỘNG ĐỒNG KẾT NỐI DOANH NGHIỆP</h4>
            <p className="VPTG__main1-text2">
              Sky Office là một cộng đồng doanh nghiệp với 3000 tổ chức và 5000
              cá nhân hiện đang sử dụng giải pháp văn phòng của chúng tôi.
            </p>
          </div>
        </div>
      </div>
      <div className="VPTG__main1-img-box">
        <div className="VPTG__main1-img-row">
          <img src={VPTGimg1} alt="" className="VPTG__main1-img" />
          <img src={VPTGimg2} alt="" className="VPTG__main1-img" />
        </div>
        <div className="VPTG__main1-img-row">
          <img src={VPTGimg3} alt="" className="VPTG__main1-img" />
          <img src={VPTGimg4} alt="" className="VPTG__main1-img" />
        </div>
      </div>
      <div className="VPTG__main1-box1">
        <h2 className="VPTG__main1-title1">
          DỊCH VỤ VĂN PHÒNG TRỌN GÓI CHO THUÊ TẠI HÀ NỘI VỚI 12 TIỆN ÍCH HẠNG A
          MIỄN PHÍ
        </h2>
        <p className="VPTG__main1-text1" style={{ width: "1200px" }}>
          Thuê văn phòng trọn gói tại Sky Office bạn chỉ cần bỏ ra chi phí từ
          5.000.000đ/ tháng để sử dụng trọn gói tiện ích: Phòng họp hiện đại,
          phòng khách sang trọng, điện - nước - internet, trang thiết bị văn
          phòng.
        </p>
      </div>
      <div className="VPTG__main1-box2">
        <div className="VPTG__main1-row">
          <div className="VPTG__main1-row-item">
            <h4 style={{ textAlign: "start" }}>1. PHÒNG KHÁCH SANG TRỌNG</h4>
            <p className="VPTG__main1-text2">
              Bạn được sử dụng phòng khách sang trọng hoàn toàn miễn phí trên
              toàn hệ thống của Sky Office.
            </p>
          </div>
          <div className="VPTG__main1-row-item">
            <h4 style={{ textAlign: "start" }}>2. PHÒNG HỌP HIỆN ĐẠI</h4>
            <p className="VPTG__main1-text2">
              Phòng họp được trang bị đầy đủ trang thiết bị: Máy chiếu, tivi,
              bảng viết,... luôn sẵn sàng phục vụ bạn khi bạn cần.
            </p>
          </div>
          <div className="VPTG__main1-row-item">
            <h4 style={{ textAlign: "start" }}>
              3. ĐỊA CHỈ ĐĂNG KÝ KINH DOANH
            </h4>
            <p className="VPTG__main1-text2">
              Bạn sẽ có 1 địa chỉ đăng ký kinh doanh ở các vị trí đắc địa tại
              trung tâm Hà Nội, thuận lợi di chuyển và giao thương.
            </p>
          </div>
          <div className="VPTG__main1-row-item">
            <h4 style={{ textAlign: "start" }}>4. LỄ TÂN XINH ĐẸP</h4>
            <p className="VPTG__main1-text2">
              Nhân viên đại diện chuyên nghiệp và xinh đẹp sẽ xử lý những công
              việc trong phạm vi cho phép khi bạn vắng mặt.
            </p>
          </div>
        </div>
        <div className="VPTG__main1-row">
          <div className="VPTG__main1-row-item">
            <h4 style={{ textAlign: "start" }}>5. MIỄN PHÍ ĐIỆN - NƯỚC</h4>
            <p className="VPTG__main1-text2">
              Không lo về hóa đơn điện - nước tăng cao, không lo về sự cố bất
              thường khi thuê văn phòng Sky Office.
            </p>
          </div>
          <div className="VPTG__main1-row-item">
            <h4 style={{ textAlign: "start" }}>6. INTERNET TỐC ĐỘ CAO</h4>
            <p className="VPTG__main1-text2">
              Được sử dụng miễn phí Internet tốc độ cao, không phải lo về giật -
              lag khiến công việc bị gián đoạn.
            </p>
          </div>
          <div className="VPTG__main1-row-item">
            <h4 style={{ textAlign: "start" }}>7. MÁY IN - PHOTOCOPY - FAX</h4>
            <p className="VPTG__main1-text2">
              Điện thoại - Máy in - Máy photocopy - Máy fax: Đã được trang bị
              đầy đủ, đáp ứng tất cả nhu cầu của doanh nghiệp.
            </p>
          </div>
          <div className="VPTG__main1-row-item">
            <h4 style={{ textAlign: "start" }}>8. NHẬN THƯ - BƯU PHẨM</h4>
            <p className="VPTG__main1-text2">
              Lễ tân sẽ giúp bạn nhận bưu thư, bưu phẩm và chuyển về địa chỉ bạn
              mong muốn. Luôn bảo mật - Đúng hẹn.
            </p>
          </div>
        </div>
        <div className="VPTG__main1-row">
          <div className="VPTG__main1-row-item">
            <h4 style={{ textAlign: "start" }}>9. AN NINH 24/7</h4>
            <p className="VPTG__main1-text2">
              Hệ thống an ninh nghiêm ngặt với bảo về và CCTV hoạt động liên tục
              24/7 giúp bạn an tâm làm việc.
            </p>
          </div>
          <div className="VPTG__main1-row-item">
            <h4 style={{ textAlign: "start" }}>10. NHÂN VIÊN HỖ TRỢ</h4>
            <p className="VPTG__main1-text2">
              Đội ngũ hỗ trợ tại Sky Office luôn sẵn sàng hỗ trợ bạn, chúng tôi
              sẽ không làm công việc bạn bị gián đoạn.
            </p>
          </div>
          <div className="VPTG__main1-row-item">
            <h4 style={{ textAlign: "start" }}>11. DỊCH VỤ SUPPORT</h4>
            <p className="VPTG__main1-text2">
              Sky Office sẽ giải quyết toàn bộ các vấn đề của doanh nghiệp: Kế
              toán, Thuế, Marketing, Quản lý văn phòng...
            </p>
          </div>
          <div className="VPTG__main1-row-item">
            <h4 style={{ textAlign: "start" }}>12. TẠP VỤ</h4>
            <p className="VPTG__main1-text2">
              Văn phòng của bạn sẽ luôn sạch sẽ và được dọn dẹp theo khung giờ
              bạn yêu cầu.
            </p>
          </div>
        </div>
      </div>
      <div className="VPTG__main1-empty-space"></div>
    </div>
  );
};

export default VPTGMain1;
