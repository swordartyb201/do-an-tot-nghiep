import { Link } from "react-router-dom";
import React from "react";
import "./main1.css";
import VPaoImage from "../../../img/van-phong-ao.png";
import VPlamviecImage from "../../../img/van-phong-lam-viec.png";
import PHthueImage from "../../../img/phong-hop-cho-thue.png";
import ChoLamViecImage from "../../../img/cho-ngoi-lam-viec.png";

const Main1 = () => {
  return (
    <div className="main1">
      <div className="main1__empty-space"></div>
      <div className="main1__title-box">
        <h1 className="main1__title">
          Giải pháp cho thuê văn phòng tại
          <b> Sky Office CoWorking Space</b>
        </h1>
      </div>
      <div className="main1__column">
        <div className="main1__column-left">
          <div className="main1__column-left-box">
            <Link
              to="/van-phong-ao"
              className="main1__link"
              style={{ textDecoration: "none" }}
            >
              <img src={VPaoImage} alt="" className="main1__img" />
              <h3 className="main1__column-bold-text1">VĂN PHÒNG ẢO</h3>
            </Link>
            <p className="main1__column-desc1">
              Bạn sẽ được sử dụng văn phòng ảo ở Hà Nội để: làm văn phòng đại
              diện, địa chỉ giao dịch, tiếp đối tác – khách hàng, địa chỉ nhận
              bưu thư…
            </p>
          </div>

          <div className="main1__column-left-box">
            <Link
              Link
              to="/van-phong-tron-goi"
              className="main1__link"
              style={{ textDecoration: "none" }}
            >
              <img src={VPlamviecImage} alt="" className="main1__img" />
              <h3 className="main1__column-bold-text1">VĂN PHÒNG TRỌN GÓI</h3>
            </Link>
            <p className="main1__column-desc1">
              Bạn sẽ sở hữu: 1 phòng làm việc riêng, phòng họp – phòng khách
              sang trọng, thiết bị văn phòng hiện đại,… Và không lo đóng phí
              điện – nước, internet.
            </p>
          </div>
        </div>
        <div className="main1__column-right">
          <div className="main1__column-right-box">
            <h3 className="main1__column-bold-text2">
              KHÔNG GIAN VĂN PHÒNG CHO THUÊ SANG TRỌNG & LỊCH LÃM
            </h3>
            <p className="main1__column-desc2">
              Sky Office đem đến giải pháp không gian văn phòng làm việc sang
              trọng và lịch thiệp, giải pháp của Sky Office sẽ giúp bạn có những
              ngày làm việc hiệu quả trong không gian văn phòng làm việc riêng
              mà không bị làm phiền.
            </p>
            <Link to="/form-tu-van-dich-vu" style={{ color: "inherit" }}>
              <button className="main1__button">Thuê văn phòng</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="main1__column2">
        <div className="main1__column-right">
          <div className="main1__column-right-box">
            <h3 className="main1__column-bold-text2">
              CHỖ NGỒI LÀM VIỆC CHUYÊN NGHIỆP PHÙ HỢP VỚI MỌI NHU CẦU
            </h3>
            <p className="main1__column-desc2">
              Chỗ ngồi làm việc trong một không gian chung mở nhưng vẫn đảm bảo
              tính riêng tư (vách ngăn – bàn làm việc riêng) và bảo mật (tủ tài
              liệu riêng). Chi phí phù hợp mà bạn vẫn được sử dụng đầy đủ tất cả
              các tiện ích từ Sky Office.
            </p>
            <Link to="/form-tu-van-dich-vu" style={{ color: "inherit" }}>
              <button className="main1__button">Thuê chỗ ngồi</button>
            </Link>
          </div>
        </div>
        <div className="main1__column-left">
          <div className="main1__column-left-box">
            <Link
              Link
              to="/phong-hop-cho-thue"
              className="main1__link"
              style={{ textDecoration: "none" }}
            >
              <img src={PHthueImage} alt="" className="main1__img" />
              <h3 className="main1__column-bold-text1">PHÒNG HỌP CHO THUÊ</h3>
            </Link>
            <p className="main1__column-desc1">
              Phòng họp có sức chứa từ 10-30 người sẽ phù hợp với các nhu cầu
              khác nhau của bạn. Được trang bị đầy đủ thiết bị hiện đại trong
              không gian sang trọng.
            </p>
          </div>

          <div className="main1__column-left-box">
            <Link
              Link
              to="/cho-ngoi-lam-viec"
              className="main1__link"
              style={{ textDecoration: "none" }}
            >
              <img src={ChoLamViecImage} alt="" className="main1__img" />
              <h3 className="main1__column-bold-text1">CHỖ NGỒI LÀM VIỆC</h3>
            </Link>
            <p className="main1__column-desc1">
              Bạn chỉ phải trả tiền cho một chỗ ngồi làm việc nhưng lại được sử
              dụng đầy đủ tiện ích văn phòng, thiết bị hiện đại trong một không
              gian yên tĩnh.
            </p>
          </div>
        </div>
      </div>
      <div className="main1__empty-space"></div>
    </div>
  );
};

export default Main1;
