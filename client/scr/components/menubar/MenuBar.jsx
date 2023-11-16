import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./menuBar.css";
import logoImage from "../../img/logo.png";

const Menu = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`menuBar ${isSticky ? "sticky-menu" : ""}`}>
      {isSticky && (
        <div className="menuBar__left">
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
            <img src={logoImage} alt="Logo" className="Menu__logo" />
          </Link>
        </div>
      )}
      <div className="menuBar__right">
        <div className="menuBar__item">
          <Link
            to="/"
            className="menuBar__link"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <span className={`menuBar__text ${isSticky ? "sticky-text" : ""}`}>
              Trang chủ
            </span>
          </Link>
        </div>
        <div className="menuBar__item">
          <Link
            to="/gioi-thieu"
            className="menuBar__link"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <span className="menuBar__text">Giới thiệu</span>
          </Link>
        </div>

        <div className="menuBar__item">
          <div className="menuBar__dropdown">
            <span
              className="menuBar__label"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Dịch vụ
            </span>
            <div className="menuBar__dropdown-content">
              <div className="menuBar__dropdown-content-box">
                <li className="menuBar__dropdown-content-item">
                  <Link
                    to="/van-phong-ao"
                    className="menuBar__link"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    <span className="menuBar__text">Văn phòng ảo</span>
                  </Link>
                </li>
                <li className="menuBar__dropdown-content-item">
                  <Link
                    to="/van-phong-tron-goi"
                    className="menuBar__link"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    <span className="menuBar__text">Văn phòng trọn gói</span>
                  </Link>
                </li>
                <li className="menuBar__dropdown-content-item">
                  <Link
                    to="/cho-ngoi-lam-viec"
                    className="menuBar__link"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    <span className="menuBar__text">Chỗ ngồi làm việc</span>
                  </Link>
                </li>
                <li className="menuBar__dropdown-content-item">
                  <Link
                    to="/phong-hop"
                    className="menuBar__link"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    <span className="menuBar__text">Phòng họp</span>
                  </Link>
                </li>
                <li className="menuBar__dropdown-content-item">
                  <Link
                    to="/phong-hop-truc-tuyen"
                    className="menuBar__link"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    <span className="menuBar__text">Phòng họp trực tuyến</span>
                  </Link>
                </li>
              </div>
            </div>
          </div>
        </div>
        <div className="menuBar__item">
          <Link
            to="/dia-diem"
            className="menuBar__link"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <span className="menuBar__text">Địa điểm</span>
          </Link>
        </div>
        <div className="menuBar__item">
          <Link
            to="/lien-he"
            className="menuBar__link"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <span className="menuBar__text">Liên hệ</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
