import "./footer.css";
import { Link } from "react-router-dom";
import logoImage from "../../img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__box">
        <div className="footer__box-about">
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
            <img src={logoImage} alt="Logo" className="footer__logo" />
          </Link>
          <p className="footer__text">
            <b>Sky Office</b> chuyên cung cấp các giải pháp cho thuê văn phòng
            chuyên nghiệp – hiện đại, phù hợp với mọi hoạt động kinh doanh của
            các doanh nghiệp. Đến với <b>Sky Office</b>, bạn sẽ được tận hưởng
            dịch vụ cho thuê hoàn hảo trong không gian sang trọng.
          </p>
          <Link
            to="/gioi-thieu"
            style={{ textDecoration: "none" }}
            className="footer__link"
          >
            <p>Chi Tiết &nbsp; &gt;</p>
          </Link>
        </div>
        <div className="footer__box-contact">
          <p className="footer__title">LIÊN HỆ</p>
          <div className="footer__box-contact-list">
            <li className="footer__box-contact-list-item">
              <FontAwesomeIcon icon={faLocationDot} className="footer__icon" />
              <a
                href="https://maps.app.goo.gl/jLjhDvtQSxKGjMRE8"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Trụ sở chính: Hoàn Kiếm, Hà Nội{" "}
              </a>
            </li>
            <li className="footer__box-contact-list-item">
              <FontAwesomeIcon icon={faPhoneVolume} className="footer__icon" />
              <a
                href="tel:+84696996669"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Gọi ngay (+84)696996669
              </a>
            </li>
            <li className="footer__box-contact-list-item">
              <FontAwesomeIcon icon={faEnvelope} className="footer__icon" />
              <a
                href="mailto:contact@skyoffice.vn"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                contact@skyoffice.vn
              </a>
            </li>
          </div>
          <Link
            to="/lien-he"
            style={{ textDecoration: "none" }}
            className="footer__link"
          >
            <p>Liên hệ &nbsp; &gt;</p>
          </Link>
        </div>
      </div>
      <div className="footer__copy-right">
        Copyright © 2023 Sky Office - CoWorking Space.
      </div>
    </div>
  );
};

export default Footer;
