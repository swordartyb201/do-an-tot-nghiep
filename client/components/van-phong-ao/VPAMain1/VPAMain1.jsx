import "./VPAMain1.css";
import VPaoImage from "../../../img/cho-thue-van-phong-ao.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faUser,
  faBuilding,
  faPrint,
  faUserShield,
  faWifi,
  faMugSaucer,
} from "@fortawesome/free-solid-svg-icons";

const VPAMain1 = () => {
  return (
    <div className="VPA__main1">
      <div className="VPA__main1-box1">
        <h2 className="VPA__main1-title1">
          TẠI SAO NÊN THUÊ VĂN PHÒNG ẢO TẠI SKY OFFICE?
        </h2>
        <p className="VPA__main1-text1">
          Bạn muốn doanh nghiệp của mình ở vị trí đắc địa, thuận lợi và sang
          trọng?
          <br /> Bạn cũng muốn sử dụng trọn gói tiện ích văn phòng MIỄN PHÍ?
          <br /> Bạn muốn sử dụng Phòng họp, Phòng khách sang trọng? Hay bạn
          muốn một nhân viên đại diện doanh nghiệp, một điện thoại viên chuyên
          nghiệp?
          <br />
          Giải pháp cho thuê văn phòng ảo có giúp được bạn không?
        </p>
        <img src={VPaoImage} alt="" className="VPA__main1-img" />
      </div>
      <div className="VPA__main1-box2">
        <h3>SKY OFFICE - CHO THUÊ VĂN PHÒNG ẢO FULL TIỆN ÍCH</h3>
        <hr />
        <div className="VPA__main1-row">
          <div className="VPA__main1-row-item">
            <FontAwesomeIcon icon={faLocationDot} className="VPA__main1-icon" />
            <h4>ĐỊA CHỈ KINH DOANH</h4>
            <p className="VPA__main1-text2">
              Cho thuê địa chỉ đăng ký kinh doanh Hà Nội sang trọng và hiện đại
              ở những vị trí đắc địa nhất tại Thủ đô.
            </p>
          </div>
          <div className="VPA__main1-row-item">
            <FontAwesomeIcon icon={faEnvelope} className="VPA__main1-icon" />
            <h4>NHẬN THƯ & BƯU PHẨM</h4>
            <p className="VPA__main1-text2">
              Sky Office sẽ nhận thư tín và bưu phẩm thay bạn sau đó sẽ chuyển
              tiếp đến địa chỉ được yêu cầu đúng hẹn.
            </p>
          </div>
          <div className="VPA__main1-row-item">
            <FontAwesomeIcon icon={faUser} className="VPA__main1-icon" />
            <h4>NHÂN VIÊN ĐẠI DIỆN</h4>
            <p className="VPA__main1-text2">
              Nhân viên đại diện chuyên nghiệp và xinh đẹp sẽ xử lý những công
              việc trong phạm vi cho phép khi bạn vắng mặt.
            </p>
          </div>
          <div className="VPA__main1-row-item">
            <FontAwesomeIcon icon={faBuilding} className="VPA__main1-icon" />
            <h4>KHÔNG GIAN HIỆN ĐẠI</h4>
            <p className="VPA__main1-text2">
              Được sử dụng linh hoạt Phòng họp và Phòng khách sang trọng để tiếp
              khách trên toàn hệ thống của Sky Office.
            </p>
          </div>
        </div>
        <div className="VPA__main1-row">
          <div className="VPA__main1-row-item">
            <FontAwesomeIcon icon={faPrint} className="VPA__main1-icon" />
            <h4>THIẾT BỊ VĂN PHÒNG</h4>
            <p className="VPA__main1-text2">
              Được sử dụng các thiết bị văn phòng hiện đại: Máy in, fax, máy
              photocopy,điện thoại hệ thống…
            </p>
          </div>
          <div className="VPA__main1-row-item">
            <FontAwesomeIcon icon={faUserShield} className="VPA__main1-icon" />
            <h4>DỊCH VỤ AN NINH 24/7</h4>
            <p className="VPA__main1-text2">
              Dịch vụ an ninh 24/7, dịch vụ vệ sinh hàng ngày giúp bạn an tâm
              hơn để phát triển doanh nghiệp.
            </p>
          </div>
          <div className="VPA__main1-row-item">
            <FontAwesomeIcon icon={faWifi} className="VPA__main1-icon" />
            <h4>INTERNET TỐC ĐỘ CAO</h4>
            <p className="VPA__main1-text2">
              Văn phòng ảo trang bị internet tốc độ cao tại toàn bộ không gian
              văn phòng Sky Office.
            </p>
          </div>
          <div className="VPA__main1-row-item">
            <FontAwesomeIcon icon={faMugSaucer} className="VPA__main1-icon" />
            <h4>TRÀ VÀ NƯỚC MIỄN PHÍ</h4>
            <p className="VPA__main1-text2">
              Sky Office cung cấp trà và nước miễn phí cho toàn bạn và quý khách
              hàng của bạn.
            </p>
          </div>
        </div>
        <div className="VPA__main1-empty-space"></div>
        <h3>
          KHÔNG CHỈ LÀ THUÊ VĂN PHÒNG ẢO MÀ BẠN CÒN THAM GIA VÀO CỘNG ĐỒNG DOANH
          NGHIỆP
        </h3>
        <hr />
      </div>
    </div>
  );
};

export default VPAMain1;
