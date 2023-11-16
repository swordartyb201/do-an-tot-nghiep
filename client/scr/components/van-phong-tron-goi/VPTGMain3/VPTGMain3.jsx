import React, { useState } from "react";
import "./VPTGMain3.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

function VPTGMain3() {
  const [activeIndex2, setActiveIndex2] = useState(null);

  const items2 = [
    {
      title: "Văn phòng trọn gói là gì? Văn phòng chia sẻ là gì?",
      content: `
      <hr/>
      <p style="margin-top: 10px;">
        <b>Văn phòng trọn gói</b> hay gọi cách khác là văn phòng tiện ích thông minh, văn phòng chia
         sẻ. Đây là một giải pháp cung cấp dịch vụ cho thuê văn phòng làm việc hiện đại được thiết 
         kế và trang bị cơ sở vật chất chuyên nghiệp, cùng với đó công ty bạn sẽ được sở hữu một văn 
         phòng làm việc riêng đi kèm với rất nhiều tiện ích văn phòng khác giúp doanh nghiệp của bạn 
         hoạt động hiệu quả, tiết kiệm chi phí.
      </p>
      <p style="margin-top: 10px;">
        Với <b>dịch vụ thuê văn phòng trọn gói </b> tại <b>Sky Office</b>, khi đó mọi nguồn lực của 
        bạn chỉ cần tập trung vào các chiến lược kinh doanh cốt lõi nhằm thúc đẩy doanh thu và gia 
        tăng lợi nhuận.
      </p>
      <p style="margin-top: 10px;">
        Văn phòng chia sẻ <b>(Shared Office)</b> là mô hình chia sẻ văn phòng làm việc, <b>thuê chung 
        văn phòng làm việc.</b> Doanh nghiệp của bạn có thể thuê văn phòng trọn gói hoặc lựa chọn 
        dịch vụ chỗ ngồi làm việc với giá rẻ. Tuy nhiên bạn hoàn toàn có thể sử dụng toàn bộ các dịch 
        vụ như một văn phòng trọn gói.
      </p>
      <p style="margin-top: 10px;">
        <b>Mô hình văn phòng chia sẻ</b> được set – up full nội thất, cùng vô vàn tiện ích văn phòng 
        khác như phòng họp, phòng tiếp khách, lễ tân, phòng ăn,….
      </p>
      <p style="margin-top: 10px;">
        <b>Dịch vụ văn phòng chia sẻ – Thuê chung văn phòng</b> này không những tiết kiệm chi phí mà 
        còn giúp tập trung công việc, tối ưu hoá hiệu quả kinh doanh phát triển. Vì mọi vấn đề khác 
        đã có công ty cung cấp dịch vụ lo cho bạn.
      </p>
      <br/>
      <hr/>
      `,
    },
    {
      title: "Lợi ích của văn phòng trọn gói là gì?",
      content: `
      <hr/>
      <p style="margin-top: 10px;">
        Với 1 chi phí tính trọn gói, chuyển văn phòng trọn gói giá rẻ Hà Nội tại Sky Office đã bao 
        gồm 15 dịch vụ đi kèm:
      </p>
      <ol style="margin-top: 15px;">
        <li>
        Văn phòng dịch vụ cho thuê nằm ở vị trí đắc địa ngay những khu vực thương mại lớn, xung quanh là các tòa nhà khối văn phòng và là trung tâm của thành phố Hà Nội thuận tiện về đi lại, giao thông
        </li>
        <li style="margin-top: 5px;">
        Bạn hoàn toàn có thể lấy địa chỉ của văn phòng để đăng ký giấy phép kinh doanh thành lập công ty và văn phòng đại diện thể hiện sự chuyên nghiệp và gây ấn tượng với khách hàng
        </li>
        <li style="margin-top: 5px;">
        Với dịch vụ cho thuê văn phòng làm việc chung bạn được sở hữu đội ngũ lễ tân trẻ trung, năng động cùng với sự chuyên nghiệp trong cung cách đón tiếp khách hàng, ngoại ngữ thông thạo.
        </li>
        <li style="margin-top: 5px;">
        Đội ngũ nhân viên hỗ trợ báo cáo thuế, tư vấn thành lập doanh nghiệp, dịch vụ trọn gói đăng ký thành lập doanh nghiệp.
        </li>
        <li style="margin-top: 5px;">
        Thuê văn phòng chung tại Sky Office có sẵn các trang thiết bị như bàn, ghế, tủ đựng hồ sơ
        </li>
        <li>
        Hiển thị trên bảng điện tử ngay tại quầy lễ tân
        </li>
        <li style="margin-top: 5px;">
        Dịch vụ trà nước café được phục vụ miễn phí khi Doanh nghiệp đến làm việc (họp, tiếp khách …) tại văn phòng.
        </li>
        <li style="margin-top: 5px;">
        Đường truyền internet tốc độ cao đáp ứng cho nhu cầu làm việc, giải trí tại văn phòng.
        </li>
        <li style="margin-top: 5px;">
        Dịch vụ cho thuê văn phòng ghép Hà Nội với bảo vệ tòa nhà 24/24 đảm bảo an ninh cùng hệ thống phòng cháy chữa cháy hiện đại.
        </li>
        <li style="margin-top: 5px;">
        Máy lạnh trong suốt quá trình làm việc, điện nước không tính phí, có máy phát điện dự phòng
        </li>
        <li style="margin-top: 5px;">
        Khi chọn dịch vụ chia sẻ văn phòng làm việc, bạn được sử dụng các thiết bị văn phòng miễn phí như máy in, scan, photocopy miễn phí.
        </li>
        <li style="margin-top: 5px;">
        Với dịch vụ văn phòng trọn gói doanh nghiệp có thể sử dụng số fax chung ( FW đến email) hoặc lắp đặt số fax, điện thoại riêng theo yêu cầu
        </li>
        <li style="margin-top: 5px;">
        Và rất nhiều tiện ích đi kèm khác……
        </li>
      </ol>
      <br/>
      <hr/>
      `,
    },
    {
      title: "Share văn phòng làm việc có những ưu điểm gì?",
      content: `
      <hr/>
      <p style="margin-top: 10px;">
        Bạn đang thắc mắc liệu bạn có phù hợp với dịch vụ cho thuê Văn phòng ảo không? 
        Có phải bạn đang là:
      </p>
      <ul style="margin-top: 15px;">
        <li>
          Giám đốc doanh nghiệp vừa & nhỏ
        </li>
        <li style="margin-top: 5px;">
          Cá nhân đang chuẩn bị thành lập doanh nghiệp và đang tìm một nơi cho thuê 
          địa chỉ đăng ký kinh doanh.
        </li>
        <li style="margin-top: 5px;">
          Cá nhân vừa mới thành lập doanh nghiệp
        </li>
        <li style="margin-top: 5px;">
          Chuyên viên tư vấn/ Nhóm dự án
        </li>
        <li style="margin-top: 5px;">
          Văn phòng đại diện quy mô nhỏ (từ các tỉnh thành gần Hà Nội, từ TP HCM, từ nước ngoài)
        </li>
        <li style="margin-top: 5px;">
          Công ty nước ngoài hoạt động trong thời gian thăm dò thị trường
        </li>
        <li style="margin-top: 5px;">
          Các cá nhân/doanh nghiệp hay phải đi công tác.
        </li>
      </ul>
      <p style="margin-top: 10px;">
        Nếu bạn là một trong số đó thì tại sao bạn không sử dụng dịch vụ cho thuê văn phòng ảo 
        giá rẻ của Sky Office? Bạn hoàn toàn phù hợp với chúng tôi và các gói dịch vụ Văn phòng ảo!
      </p>
      <br/>
      <hr/>
      `,
    },
    {
      title: "Văn phòng ảo có hợp pháp không?",
      content: `
      <hr/>
      <ul style="margin-top: 15px;">
        <li>
          Theo các chuyên gia, về mặt luật pháp, hiện việc thuê và cho thuê 
          văn phòng ảo là không trái pháp luật Việt Nam hiện hành.
        </li>
        <li style="margin-top: 5px;">
          Doanh nghiệp là tổ chức kinh tế có tên riêng, có trụ sở giao dịch ổn 
          định, có tài sản được đăng ký nhằm mục đích thực hiện các hoạt động kinh doanh.
        </li>
        <li style="margin-top: 5px;">
          Trụ sở giao dịch phải nằm trên lãnh thổ Việt Nam, có địa chỉ được xác định, 
          bao gồm số nhà, tên xã, phường, tỉnh/thành phố, và phải được thông báo với 
          cơ quan đăng ký kinh doanh.”
        </li>
      </ul>
      <br/>
      <hr/>
      `,
    },
    {
      title: "Tính chất pháp lý của Văn Phòng Trọn Gói?",
      content: `
      <hr/>
      <p style="margin-top: 10px;">
        Hiện nay theo Luật Doanh nghiệp văn phòng ảo không được phép đăng ký kinh doanh. 
        Thay vào đó doanh nghiệp có thể lựa chọn gói dịch vụ trụ sở chính là nơi đăng ký kinh 
        doanh hợp pháp. Các đặc điểm của trụ sở chính đó là địa điểm liên lạc của doanh nghiệp 
        nằm trên lãnh thổ Việt Nam. Có địa chỉ được xác định gồm số nhà, ngách, hẻm, ngõ phố, 
        đường, thôn, xóm, ấp, phường, thị trấn, huyện, quận, thị xã, tỉnh thành phố một cách 
        chi tiết và rõ ràng.
      </p>
      <br/>
      <hr/>
      `,
    },
    {
      title: "Doanh nghiệp nào phù hợp với Văn phòng trọn gói?",
      content: `
      <hr/>
      <p style="margin-top: 10px;">
        Với sự tối ưu, đem lại tính hiệu quả cao và chất lượng dịch vụ ưu việt, có nhiều loại hình 
        phù hợp có thể đáp ứng được các nhu cầu của các doanh nghiệp thì văn phòng ảo là một lựa 
        chọn hoàn toàn nên cân nhắc khi bạn muốn tìm một địa chỉ thuận tiện và chuyên nghiệp, muốn 
        tiết kiệm chi phí thuê văn phòng, hay muốn nâng tầm hình ảnh của mình.
      </p>
      <p style="margin-top: 10px;">
        Ở nước ngoài, văn phòng ảo là loại hình dịch vụ phổ biến và ưa chuộng. Thế nhưng, ở Việt Nam 
        còn Khá nhiều doanh nghiệp chưa hiểu về loại hình dịch vụ này nên còn e ngại và chưa dám tiếp 
        xúc. Tuy nhiên, hiện nay các địa chỉ cung cấp dịch vụ cho thuê văn phòng ảo đều hết sức chú 
        trọng đến không gian làm việc của văn phòng và chất lượng dịch vụ văn phòng.
      </p>
      <h2 style="margin-top: 20px;">Doanh nghiệp nhỏ và vừa có nên thuê văn phòng ảo không?</h2>
      <p style="margin-top: 20px;">
        Văn phòng ảo được dịch theo nghĩa đen của từ Virtual Office.
      </p>
      <p style="margin-top: 10px;">
        Các tiện ích đi kèm để hỗ trợ các công việc kinh doanh và hoạt động của doanh nghiệp cũng 
        rất được chú trọng. Rất nhiều doanh nghiệp nước ngoài sang Việt Nam đều sử dụng loại hình 
        dịch vụ này để có được một địa chỉ đặt văn phòng giao dịch, văn phòng đại diện để tìm hiểu 
        và nghiên cứu thị trường và có được hiệu quả rất cao.
      </p>
      <p style="margin-top: 10px;">
        Mỗi doanh nghiệp đều có điểm mạnh và yếu. Nhưng giải quyết bài toán kinh tế là điều quan 
        trọng nhất mà doanh nghiệp nào cũng quan tâm và hướng tới.
      </p>
      <p style="margin-top: 10px;">
        Để giải quyết bài toán này, các doanh nghiệp sẽ lựa chọn cho mình một hình thức tối ưu và 
        đạt hiệu quả cao nhất nhưng lại tiết kiệm chi phí. Tại Sky Office cung cấp dịch vụ với 
        giá thuê văn phòng ảo cực tốt. Nghe có vẻ không khả thi nhưng văn phòng ảo chính là hình 
        thức mà bạn cần.
      </p>
      <p style="margin-top: 10px;">
        Sky Office Coworking Space sẽ giúp bạn giảm thiểu tối đa chi phí, giúp bạn có một địa chỉ 
        kinh doanh chuyên nghiệp và hiện đại. Sky Office sẽ chuẩn bị toàn bộ mẫu hợp đồng cho 
        thuê văn phòng ảo, cùng giải quyết tất cả các vấn đề còn lại cho doanh nghiệp. Còn chần 
        chờ gì nữa, hãy liên hệ và đến với chúng tôi ngay qua Hotline: <b>085.339.4567 – 0904.388.909</b>
      </p>
      <br/>
      <hr/>
      `,
    },
    {
      title:
        "Thuê văn phòng trọn gói tại Sky Office có phát sinh thêm chi phí không?",
      content: `
      <hr/>
      <p style="margin-top: 10px;">
        Với sự tối ưu, đem lại tính hiệu quả cao và chất lượng dịch vụ ưu việt, có nhiều loại hình 
        phù hợp có thể đáp ứng được các nhu cầu của các doanh nghiệp thì văn phòng ảo là một lựa 
        chọn hoàn toàn nên cân nhắc khi bạn muốn tìm một địa chỉ thuận tiện và chuyên nghiệp, muốn 
        tiết kiệm chi phí thuê văn phòng, hay muốn nâng tầm hình ảnh của mình.
      </p>
      <p style="margin-top: 10px;">
        Ở nước ngoài, văn phòng ảo là loại hình dịch vụ phổ biến và ưa chuộng. Thế nhưng, ở Việt Nam 
        còn Khá nhiều doanh nghiệp chưa hiểu về loại hình dịch vụ này nên còn e ngại và chưa dám tiếp 
        xúc. Tuy nhiên, hiện nay các địa chỉ cung cấp dịch vụ cho thuê văn phòng ảo đều hết sức chú 
        trọng đến không gian làm việc của văn phòng và chất lượng dịch vụ văn phòng.
      </p>
      <h2 style="margin-top: 20px;">Doanh nghiệp nhỏ và vừa có nên thuê văn phòng ảo không?</h2>
      <p style="margin-top: 20px;">
        Văn phòng ảo được dịch theo nghĩa đen của từ Virtual Office.
      </p>
      <p style="margin-top: 10px;">
        Các tiện ích đi kèm để hỗ trợ các công việc kinh doanh và hoạt động của doanh nghiệp cũng 
        rất được chú trọng. Rất nhiều doanh nghiệp nước ngoài sang Việt Nam đều sử dụng loại hình 
        dịch vụ này để có được một địa chỉ đặt văn phòng giao dịch, văn phòng đại diện để tìm hiểu 
        và nghiên cứu thị trường và có được hiệu quả rất cao.
      </p>
      <p style="margin-top: 10px;">
        Mỗi doanh nghiệp đều có điểm mạnh và yếu. Nhưng giải quyết bài toán kinh tế là điều quan 
        trọng nhất mà doanh nghiệp nào cũng quan tâm và hướng tới.
      </p>
      <p style="margin-top: 10px;">
        Để giải quyết bài toán này, các doanh nghiệp sẽ lựa chọn cho mình một hình thức tối ưu và 
        đạt hiệu quả cao nhất nhưng lại tiết kiệm chi phí. Tại Sky Office cung cấp dịch vụ với 
        giá thuê văn phòng ảo cực tốt. Nghe có vẻ không khả thi nhưng văn phòng ảo chính là hình 
        thức mà bạn cần.
      </p>
      <p style="margin-top: 10px;">
        Sky Office Coworking Space sẽ giúp bạn giảm thiểu tối đa chi phí, giúp bạn có một địa chỉ 
        kinh doanh chuyên nghiệp và hiện đại. Sky Office sẽ chuẩn bị toàn bộ mẫu hợp đồng cho 
        thuê văn phòng ảo, cùng giải quyết tất cả các vấn đề còn lại cho doanh nghiệp. Còn chần 
        chờ gì nữa, hãy liên hệ và đến với chúng tôi ngay qua Hotline: <b>085.339.4567 – 0904.388.909</b>
      </p>
      <br/>
      <hr/>
      `,
    },
  ];

  const toggleContent2 = (index) => {
    setActiveIndex2(index === activeIndex2 ? null : index);
  };

  return (
    <div className="VPTGmain3-container">
      <div className="VPTG-text-box">
        <h2 style={{ color: "black" }}>
          TÌM HIỂU VỀ VĂN PHÒNG TRỌN GÓI CHO THUÊ
        </h2>
        <br />
        <hr />
        <div className="VPTG-text">
          <p>
            <b>Dịch vụ cho thuê văn phòng trọn gói</b> được du nhập vào Việt Nam
            năm 2006, được bùng nổ và phát triển vào giai đoạn năm 2013 đến nay.
          </p>
          <p style={{ marginTop: "10px" }}>
            Sky Office cung cấp dịch vụ cho thuê văn phòng trọn gói giá rẻ linh
            hoạt theo giờ Hà Nội. Giá chỉ từ <b>1.400.000 VNĐ/tháng</b> bạn đã
            có một chỗ ngồi làm việc linh hoạt, chuyên nghiệp và hiện đại. Hãy
            đến với Sky Office, chúng tôi sẽ đem đến cho các bạn một văn phòng
            chuyên nghiệp – hiện đại – sang trọng.
          </p>
          <p style={{ marginTop: "10px" }}>
            Với dịch vụ <b>cho thuê văn phòng</b> này bạn hay doanh nghiệp của
            bạn chỉ cần tập trung toàn bộ sức mạnh và nguồn lực vào lĩnh vực
            kinh doanh chính của mình còn các vấn đề phụ trợ đã có Sky Office
            thay bạn chịu trách nhiệm. Bạn hoàn toàn chủ động trong công việc
            kinh doanh!
          </p>
        </div>
      </div>
      <br />
      <h2>
        Những câu hỏi thường gặp về giải pháp Văn phòng trọn gói tại Hà Nội:
      </h2>
      <br />
      <div className="VPTGaccordion2">
        {items2.map((item, index) => (
          <div key={index}>
            <div
              className={`VPTGaccordion2-title ${
                activeIndex2 === index ? "active" : ""
              }`}
              onClick={() => toggleContent2(index)}
            >
              <div className="title-icon">
                {activeIndex2 === index ? (
                  <FontAwesomeIcon icon={faMinus} />
                ) : (
                  <FontAwesomeIcon icon={faPlus} />
                )}
              </div>
              {item.title}
            </div>
            {activeIndex2 === index && (
              <div
                className="VPTGcustom2-content"
                dangerouslySetInnerHTML={{ __html: item.content }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default VPTGMain3;
