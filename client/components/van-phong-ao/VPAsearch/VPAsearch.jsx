import "./VPAsearch.css";
import React, { useState, useContext } from "react";
import { SearchContext } from "../../../context/SearchContext";

const VPAsearch = () => {
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
    <div className="VPAsearch-container">
      <div className="VPAsearch-text-box">
        <div className="VPAsearch-tittle1">
          <h1>CHO THUÊ VĂN PHÒNG ẢO</h1>
        </div>
        <div className="VPAsearch-tittle2">
          <p>
            Một địa chỉ kinh doanh chuyên nghiệp ở vị trí đắc địa tại Thủ đô Hà
            Nội
          </p>
        </div>
        <div className="VPAsearch-desc">
          Giải pháp <b>Cho Thuê Văn Phòng Ảo</b> sẽ giúp bạn tạo dựng hình ảnh
          chuyên nghiệp và hiện đại. Dịch vụ Văn Phòng Ảo của Sky Office giải
          quyết toàn bộ nhu cầu của mọi doanh nghiệp và sẽ giúp doanh nghiệp tận
          dụng được tối đa các cơ hội kinh doanh.
        </div>
      </div>

      <div className="VPAsearch-bar-box">
        <div className="VPAsearch-dropdown-container">
          <p>Chọn một địa điểm</p>
          <select
            className="VPAsearch-dropdown"
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
        <div className="VPAsearch-dropdown-container">
          <p>Nhu cầu sử dụng</p>
          <select
            className="VPAsearch-dropdown"
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
        <button className="VPAsearch-button" onClick={handleSearch}>
          Tìm kiếm
        </button>
      </div>
    </div>
  );
};

export default VPAsearch;
