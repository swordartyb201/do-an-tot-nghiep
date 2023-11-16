import "./VPTGsearch.css";
import { Link } from "react-router-dom";
import React, { useState, useContext } from "react";
import { SearchContext } from "../../../context/SearchContext";

const VPTGsearch = () => {
  const { options, dispatch } = useContext(SearchContext); // Sử dụng context

  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedNumberOfPeople, setSelectedNumberOfPeople] = useState("");

  const locations = ["Địa điểm 1", "Địa điểm 2", "Địa điểm 3", "Địa điểm 4"];
  const numberOfPeopleOptions = ["Cá nhân", "Từ 4 đến 5 người", "3", "4", "5+"]; // Tuỳ chọn số lượng người

  const handleSearch = () => {
    // Xử lý tìm kiếm dựa trên selectedLocation và selectedNumberOfPeople
    // Ví dụ: in ra console lựa chọn địa điểm và số lượng người
    console.log("Đã chọn địa điểm:", selectedLocation);
    console.log("Số lượng người:", selectedNumberOfPeople);

    // Cập nhật context với thông tin mới
    dispatch({
      type: "NEW_SEARCH",
      payload: {
        ...options,
        location: selectedLocation,
        numberOfPeople: selectedNumberOfPeople,
      },
    });
  };
  return (
    <div className="VPTGsearch-container">
      <div className="VPTGsearch-text-box">
        <div className="VPTGsearch-tittle1">
          <h1>CHO THUÊ VĂN PHÒNG TRỌN GÓI TẠI HÀ NỘI</h1>
        </div>
        <div className="VPTGsearch-tittle2">
          <p>
            Giải pháp không gian làm việc sang trọng, trọn gói tiện ích và tiết
            kiệm chi phí tại Hà Nội
          </p>
        </div>
        <div className="VPTGsearch-desc">
          Sky Office <b>Cho thuê văn phòng trọn gói </b> tại Hà Nội là mô hình
          cho thuê văn phòng làm việc đã có đầy đủ các trang thiết bị nội thất
          (bàn, ghế, tủ,…), miễn phí hạ tầng (Wifi, Máy in, điện, nước…), miễn
          phí dịch vụ (Phòng họp, Phòng tiếp khách, Pantry, Trà, cafe,…) và các
          dịch vụ khác (Lễ tân, chuyển phát,…) để bạn có thể sẵn sàng làm việc
          ngay với <b>trọn gói chi phí chỉ từ 5.000.000đ/tháng.</b>
        </div>
      </div>
      <Link
        to="#van-phong-ao-la-gi"
        style={{ textDecoration: "none" }}
        className="VPTGsearch-link"
      >
        <p> &gt; &nbsp;Tìm hiểu văn phòng ảo là gì? </p>
      </Link>
      <div className="VPTGsearch-bar-box">
        <div className="VPTGsearch-dropdown-container">
          <p>Chọn một địa điểm</p>
          <select
            className="VPTGsearch-dropdown"
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
          >
            <option value="">Chọn địa điểm</option>
            {locations.map((location, index) => (
              <option key={index} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>
        <div className="VPTGsearch-dropdown-container">
          <p>Nhu cầu sử dụng</p>
          <select
            className="VPTGsearch-dropdown"
            value={selectedNumberOfPeople}
            onChange={(e) => setSelectedNumberOfPeople(e.target.value)}
          >
            <option value="">Nhu cầu sử dụng</option>
            {numberOfPeopleOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <button className="VPTGsearch-button" onClick={handleSearch}>
          Tìm kiếm
        </button>
      </div>
    </div>
  );
};

export default VPTGsearch;
