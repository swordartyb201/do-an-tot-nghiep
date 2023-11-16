import "./GTmain.css";
import React from "react";
import GTimg2 from "../../../img/GT-img2.jpg";
import GTimg3 from "../../../img/GT-img3.jpg";
import GTimg4 from "../../../img/GT-img4.jpg";
import GTimg5 from "../../../img/GT-img5.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const GTmain = () => {
  return (
    <div className="GTmain-container">
      <div className="GTmain-empty-space"></div>
      <div className="GTmain-top-container">
        <div className="GTmain-top">
          <div className="GTmain-top-left">
            <img src={GTimg2} alt="" className="GTmain2__img" />
            <h2 style={{ marginTop: "10px" }}>
              Ngôi nhà chung của một cộng đồng các doanh nghiệp tiên phong
            </h2>
            <p style={{ marginTop: "10px" }}>
              Mô hình Co-working space mang lại một môi trường làm việc năng
              động, sáng tạo, là nơi giúp các doanh nghiệp kết nối, trao đổi
              thông tin qua quá trình kết nối mạng. Đây cũng là nơi cơ hội mở
              rộng mối quan hệ và tìm kiếm đối tác dành cho doanh nghiệp vừa và
              nhỏ hay doanh nghiệp doanh nghiệp mới thành lập.
            </p>
          </div>
          <div className="GTmain-top-right">
            <div className="GTmain-top-right1">
              <h2 style={{ marginTop: "10px" }}>
                Sky Office - Hệ thống Coworking Space tại Hà Nội
              </h2>
              <p style={{ marginTop: "10px", fontSize: "16px" }}>
                Kể từ khi thành lập vào năm 2023, Sky Office đã không ngừng phát
                triển và mở rộng, giờ đây đã xây dựng được một mạng lưới với 5
                cơ sở trên Hà Nội.
              </p>
              <p style={{ marginTop: "10px", fontSize: "16px" }}>
                Sky Office luôn đồng hành và hỗ trợ bạn tập trung vào việc điều
                hành doanh nghiệp một các thuận lợi nhất. Sky Office hướng tới
                mục tiêu xây dựng cộng đồng doanh nghiệp tiên phong, bền vững
                trải dài trên nhiều lĩnh vực.
              </p>
            </div>
            <div className="GTmain-top-right2">
              <div className="GTmain-top-right2-item">
                <div className="GTmain-icon-container">
                  <FontAwesomeIcon icon={faEye} className="GTmain-icon" />
                </div>
                <h3>Tầm nhìn</h3>
                <p style={{ marginTop: "10px", fontSize: "16px" }}>
                  Sky Office cam kết mang đến cho cộng đồng doanh nghiệp dịch vụ
                  văn phòng chuyên nghiệp – hiện đại. Giúp các doanh nghiệp tập
                  trung vào giá trị kinh doanh cốt lõi.
                </p>
              </div>

              <div className="GTmain-top-right2-item">
                <div className="GTmain-icon-container">
                  <FontAwesomeIcon
                    icon={faPaperPlane}
                    className="GTmain-icon"
                  />
                </div>
                <h3>Sứ mệnh</h3>
                <p style={{ marginTop: "10px", fontSize: "16px" }}>
                  Trở thành biểu tượng niềm tin và lựa chọn hàng đầu Việt Nam về
                  các loại hình dịch vụ văn phòng thông minh. Đem đến cho các
                  doanh nghiệp một giải pháp văn phòng hiệu quả hơn.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="GTmain-empty-space"></div>
      <div className="GTmain-bot-container">
        <div className="GTmain-bot">
          <div className="GTmain-bot-item">
            <h2>
              Giúp bạn có được trải nghiệm tuyệt vời trong quá trình làm việc và
              vận hành
            </h2>
            <img src={GTimg3} alt="" className="GTmain2__img" />
          </div>
          <div className="GTmain-bot-item1">
            <h2>Làm việc theo cách của bạn</h2>
            <p
              style={{
                marginTop: "15px",
                marginBottom: "20px",
                fontSize: "16px",
              }}
            >
              Chọn công việc tại không gian văn phòng, không gian làm việc chung
              hoặc phòng có diện tích hoặc thời gian như mong muốn.
            </p>
            <img src={GTimg4} alt="" className="GTmain2__img" />
          </div>
          <div className="GTmain-bot-item1">
            <h2>Dịch vụ hỗ trợ chuyên nghiệp</h2>
            <p
              style={{
                marginTop: "15px",
                marginBottom: "20px",
                fontSize: "16px",
              }}
            >
              Khách hàng không chỉ chọn một không gian làm việc tại Hanoi Office
              mà là chọn con người của chúng tôi với sự tận tâm, thân thiện và
              chuyên nghiệp
            </p>
            <img src={GTimg5} alt="" className="GTmain2__img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GTmain;
