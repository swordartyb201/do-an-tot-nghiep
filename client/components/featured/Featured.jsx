import useFetch from "../../hooks/useFetch";
import "./featured.css";
import hoanKiemImage from "../../img/hoan-kiem.jpg";
import dongDaImage from "../../img/dong-da.jpg";
import thanhXuanImage from "../../img/thanh-xuan.jpg";
import haDongImage from "../../img/ha-dong.jpg";

const Featured = () => {
  const { data, loading } = useFetch(
    "/spaces/countByLocation?locations=HoanKiem,DongDa,ThanhXuan,HaDong"
  );

  return (
    <div className="featuredContainer">
      <div className="featuredTitle">
        <span className="featuredTitle1">
          HÃY LỰA CHỌN MỘT ĐỊA CHỈ CHO THUÊ VĂN PHÒNG TẠI HÀ NỘI THUẬN TIỆN NHẤT
        </span>
        <p className="featuredTitle2">
          Văn phòng cho thuê Sky Office Coworking Space được đặt tại các vị trí
          giao thông đi lại thuận tiện, ở những địa chỉ tập trung nhiều công ty
          lớn và các ngân hàng. Chúng tôi sẽ giúp bạn tận dụng được tối đa các
          cơ hội kinh doanh của mình.
        </p>
      </div>
      <div className="featured">
        {loading ? (
          "Đang tải ... Vui lòng chờ trong giây lát"
        ) : (
          <>
            <div className="featuredItem">
              <img src={hoanKiemImage} alt="" className="featuredImg" />
              <div className="featuredTitles">
                <h1>Hoàn Kiếm</h1>
                <h2>{data[0]} Cơ sở</h2>
              </div>
            </div>

            <div className="featuredItem">
              <img src={dongDaImage} alt="" className="featuredImg" />
              <div className="featuredTitles">
                <h1>Đống Đa</h1>
                <h2>{data[1]} Cơ sở</h2>
              </div>
            </div>
            <div className="featuredItem">
              <img src={thanhXuanImage} alt="" className="featuredImg" />
              <div className="featuredTitles">
                <h1>Thanh Xuân</h1>
                <h2>{data[2]} cơ sở</h2>
              </div>
            </div>
            <div className="featuredItem">
              <img src={haDongImage} alt="" className="featuredImg" />
              <div className="featuredTitles">
                <h1>Hà Đông</h1>
                <h2>{data[3]} cơ sở</h2>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="featuredSpace"></div>
    </div>
  );
};

export default Featured;
