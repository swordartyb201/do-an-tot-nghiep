import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import MenuList from "../../components/menubar/MenuBar";
import "./lien-he.css";

const LH = () => {
  return (
    <div className="LH-container">
      <Navbar />
      <MenuList />
      <div className="LH-main">
        <div className="LH-sendRQ">
          <section>
            <div className="LH-sendRQ-form">
              <b style={{ fontSize: "25px" }}>TRÒ CHUYỆN CÙNG SKY OFFICE</b>
              <form className="LH-sendRQ-form-input">
                <div className="LH-input-text">
                  <div className="LH-input-box">
                    <label>Họ và tên:</label>
                    <input
                      type="text"
                      name="user_name"
                      className="LH-input"
                    ></input>

                    <label>Email:</label>
                    <input
                      type="email"
                      name="user_email"
                      className="LH-input"
                    ></input>
                  </div>

                  <div className="LH-input-box">
                    <label>Số điện thoại:*</label>
                    <input
                      type="tel"
                      name="user_phone"
                      className="LH-input-phone"
                      required
                    ></input>

                    <label>Lựa chọn giải pháp:</label>
                    <select id="type" name="user_type" className="LH-input">
                      <option value="Văn phòng trọn gói">
                        Văn phòng trọn gói
                      </option>
                      <option value="Văn phòng ảo">Văn phòng ảo</option>
                      <option value="Chỗ ngồi làm việc">
                        Chỗ ngồi làm việc
                      </option>
                    </select>
                  </div>
                </div>
                <div className="LH-input-text1">
                  <label>Yêu cầu chi tiết:</label>
                  <textarea name="message"></textarea>
                </div>
                <button className="LH-button">GỬI YÊU CẦU</button>
              </form>
            </div>
          </section>
        </div>
        <div className="LH-infor">
          <b style={{ fontSize: "25px" }}>CÔNG TY CỔ PHẦN SKY VIỆT NAM</b>
          <p style={{ marginTop: "2px" }}>
            Sky Office - Giải pháp cho thuê văn phòng hiện đại và chuyên nghiệp.
          </p>
          <br />
          <p style={{ marginTop: "10px" }}>
            <b>Trụ sở chính:</b> Tầng 8, tòa nhà Sannam, 78 phố Duy Tân, quận
            Cầu Giấy, thành phố Hà Nội
          </p>
          <p style={{ marginTop: "10px" }}>
            <b>Điện thoại:</b> (84) 24 3795 9900
          </p>
          <p style={{ marginTop: "10px" }}>
            <b>Email:</b> contact@skyoffice.vn
          </p>
          <p style={{ marginTop: "10px" }}>
            <b>Website:</b> skyoffice.vn
          </p>
          <br />
          <br />
          <hr />
          <br />
          <b style={{ fontSize: "25px" }}>TƯ VẤN & CHĂM SÓC KHÁCH HÀNG</b>
          <br />
          <p style={{ marginTop: "10px" }}>Tel: +(84) 85 339 4567</p>
          <p style={{ marginTop: "5px" }}>Fax: +(84) 24 3795 9911</p>
          <p style={{ marginTop: "5px" }}>Email: contact@hanoioffice.vn</p>
          <br />
          <hr />
          <br />
          <p>Đừng quên theo dõi Sky Office tại:</p>
          <p style={{ marginTop: "10px" }}>
            <b>
              Facebook:{" "}
              <a
                href="https://www.facebook.com/ten-trang-facebook-cua-ban"
                target="_blank"
                className="LH-link"
              >
                Sky Office
              </a>
            </b>
          </p>
          <p style={{ marginTop: "10px" }}>
            <b>
              Twitter:{" "}
              <a
                href="https://www.twitter.com/ten-trang-facebook-cua-ban"
                target="_blank"
                className="LH-link"
              >
                Sky Office
              </a>
            </b>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LH;
