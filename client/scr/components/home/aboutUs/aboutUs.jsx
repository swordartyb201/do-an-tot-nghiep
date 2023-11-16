import { Link } from "react-router-dom";
import React from "react";
import "./aboutUs.css";
import abouUsImage from "../../../img/about-us.jpg";

const AboutUs = () => {
  return (
    <div className="aboutUs">
      <div className="aboutUs__empty-space"></div>
      <div className="aboutUs__box">
        <div className="aboutUs__box-text">
          <h1 className="aboutUs__title">
            GIỚI THIỆU VỀ
            <b> Sky Office</b>
          </h1>
          <h2 className="aboutUs_title-2">
            Dịch vụ cho thuê Văn Phòng Ảo - Phòng Làm Việc Riêng - Chỗ Ngồi Làm
            Việc - Phòng Họp - Coworking Space tại Hà Nội
          </h2>
          <i className="aboutUs__desc">
            <b> Hanoi Office – Mô hình Coworking Space </b>
            tiên phong trong lĩnh vực cho thuê Văn phòng ảo – Văn phòng trọn gói
            – Coworking Space ở Hà Nội nói riêng và Việt Nam nói chung. Chúng
            tôi sẽ đem đến cho quý khách hàng những dịch vụ và trải nghiệm tốt
            nhất. Vì chúng tôi hiểu bạn, luôn bên bạn và cùng bạn đi tới Thành
            công!
          </i>
          <i className="aboutUs__desc">
            Giải pháp
            <b> Cho thuê văn phòng – Coworking Space tại Hà Nội </b>
            kiến tạo cho bạn một không gian làm việc chuyên nghiệp, hiện đại và
            sáng tạo, xây dựng cộng đồng doanh nghiệp tiên phong và đứng đầu.
          </i>
          <i className="aboutUs__desc">
            <b> Hãy đến Hanoi Office – Coworking Space và trải nghiệm ngay! </b>
          </i>
          <div className="aboutUs__box-button">
            <Link to="/thue-van-phong" style={{ color: "inherit" }}>
              <button className="aboutUs__button">Thuê văn phòng</button>
            </Link>
          </div>
        </div>
        <div className="aboutUs__box-img">
          <img src={abouUsImage} alt="" className="main2-img" />
        </div>
      </div>
      <div className="aboutUs__empty-space"></div>
    </div>
  );
};

export default AboutUs;
