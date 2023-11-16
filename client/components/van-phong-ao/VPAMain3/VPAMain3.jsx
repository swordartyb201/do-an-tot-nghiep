import React, { useState } from "react";
import "./VPAMain3.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

function VPAMain3() {
  const [activeIndex1, setActiveIndex1] = useState(0);
  const [activeIndex2, setActiveIndex2] = useState(null);

  const items1 = [
    {
      title: "1. TIẾT KIỆM TỐI ĐA CHI PHÍ",
      content: `
      <p>
        - <strong>Dịch vụ Văn Phòng Ảo tại Hà Nội</strong> tức là bạn có thể
        thuê địa chỉ mở công ty để có thể giảm thiểu chi phí vận hành một
        cách tối đa. Giải pháp Văn Phòng Ảo sẽ giúp doanh nghiệp, Start-up
        tối ưu được 80% chi phí vận hành, chi phí đầu tư ban đầu (chi phí cố
        định) và cả chi phí cơ hội. Tại sao vậy?
      </p>
      <p>
        - Sử dụng <strong>dịch vụ cho thuê Văn Phòng Ảo tại Hà Nội</strong>,
        bạn sẽ không phải đầu tư một khoản chi phí lớn để thuê văn phòng
        theo kiểu truyền thống.
      </p>
      <br/>
      <ul>
        <li>Không phải đầu tư tài sản cố định</li>
        <li>Không trả tiền cho máy móc thiết bị văn phòng, hệ thống viễn thông</li>
        <li>Không phải trả lương cho nhân viên lễ tân</li>
        <li>Không phải chi trả tiện ích</li>
      </ul>
      <br/>
      <p>
        - Với dịch vụ cho thuê <strong>văn phòng ảo hạng A</strong> tại Sky Office bạn 
        vẫn có được một văn phòng hoàn hảo và chuyên nghiệp. Điều đó giúp bạn giảm bớt 
        thời gian và công sức trong rất nhiều trong việc điều hành, quản lý doanh nghiệp.
      </p>
    `,
    },
    {
      title: "2. TRỤ SỞ DOANH NGHIỆP",
      content: `
      <p>
        - Với <strong>mô hình kinh doanh văn phòng ảo</strong> bạn sẽ có một địa chỉ kinh 
        doanh tuyệt vời tại các các trung tâm văn phòng hiện đại và chuyên nghiệp ở Hà Nội.
      </p>
      <p>
        - Và bạn có thể sử dụng địa chỉ này làm địa chỉ giao dịch chính thức của công ty phục 
        vụ cho công việc đăng ký kinh doanh, ký kết hợp đồng, giao dịch thư tín, gặp gỡ đối 
        tác,… một cách hoàn toàn hợp pháp.
      </p>
    `,
    },
    {
      title: "3. THÔNG TIN LIÊN LẠC",
      content: `
      <p>
        - Dịch vụ cho thuê <strong>văn phòng ảo hạng A</strong> cung cấp hệ thống xử lý thông 
        tin của các loại thư từ, điện thoại, fax,… chính xác, nhanh chóng và linh hoạt.
      </p>
      <p>
        - Do vậy, khi đăng ký văn phòng ảo việc giao tiếp hay liên lạc của bạn với đối tác và 
        khách hàng vẫn hết sức chuyên nghiệp và thuận lợi dù rằng bạn đã tiết kiệm chi phí 
        đến mức tối đa.
      </p>
    `,
    },
    {
      title: "4. XÂY DỰNG HÌNH ẢNH",
      content: `
      <p>
        - Với địa chỉ <strong>kinh doanh văn phòng ảo</strong> sang trọng và hiện đại, các dịch 
        vụ khách hàng và hệ thống thông tin được tổ chức bài bản và chuyên nghiệp. Bạn có thể 
        hoàn toàn yên tâm rằng hình ảnh của bạn, của doanh nghiệp sẽ trở nên chuyên nghiệp 
        trong tâm trí khách hàng.
      <p>
  `,
    },
    {
      title: "5. NẮM BẮT CƠ HỘI",
      content: `
      <p>
        - Sử dụng Văn phòng ảo, thuê địa chỉ mở công ty bạn đã là người đi tiên phong trong 
        một trào lưu mới, bạn cũng là người tiên phong cho xu thế kinh doanh trong tương lai. 
        Bạn chỉ cần tập trung tất cả các nguồn lực vào các hoạt động kinh doanh cốt lõi của mình.
      </p>
      <p>
        - Bởi vì, đã có Sky Office cung cấp dịch vụ <strong>văn phòng ảo rẻ nhất Hà Nội</strong> 
        sẽ giúp bạn thực hiện tất cả những công việc khác để doanh nghiệp của bạn thành công 
        hơn, đem đến nhiều lợi nhuận hơn.
      </p>
  `,
    },
  ];

  const items2 = [
    {
      title: "Văn phòng ảo là gì?",
      content: `
      <hr/>
      <p style="margin-top: 10px;">
        <b>Khái niệm Văn phòng ảo</b> là một loại hình thức dịch vụ cho thuê văn phòng “0m2” 
        dùng để làm văn phòng đại diện – giao dịch hay một địa chỉ để đăng ký kinh doanh, mà 
        trong đó mọi thông tin giao dịch đều được chuyển hướng về văn phòng thực tế (tức là 
        cho thuê địa chỉ văn phòng).
      </p>
      <p style="margin-top: 10px;">
        Mọi hoạt động đều không hề “ảo” mà hoàn toàn tiện lợi. Bởi bạn không những có thể sử 
        dụng một địa chỉ để đăng ký kinh doanh, mà còn có đội ngũ nhân viên nhiệt tình trong 
        các công việc được cho phép thực hiện thay bạn.
      </p>
      <p style="margin-top: 10px;">
        Văn phòng ảo được dịch theo nghĩa đen của từ Virtual Office.
      </p>
      <p style="margin-top: 10px;">
        Từ Virtual có nghĩa là THỰC – THỰC SỰ, nhưng trong vật lý khái niệm này có nghĩa là 
        “hình phản chiếu/vật phản chiếu”, do đó mà dịch theo nghĩa đen là “ảo”. Cách chuyển 
        ngữ hiện nay một số người hay dùng: VIRTUAL OFFFICE = Văn phòng ảo là bám vào nghĩa 
        nên đôi khi nhiều người nghĩ rằng “ảo” là không có thật.
      </p>
      <p style="margin-top: 10px;">
        Hãy hiểu theo cách đơn giản, văn phòng ảo là một địa chỉ văn phòng cho thuê làm địa 
        chỉ kinh doanh của công ty bạn. Văn phòng này có tất cả các tiệc ích của một văn phòng 
        chuyên nghiệp: nhân viên lễ tân trả lời điện thoại, có phòng họp với nhiều sức chứa, 
        có phòng tiếp khách, dịch vụ viễn thông và mọi trang thiết bị văn phòng để bạn sử dụng.
      </p>
      <p style="margin-top: 10px;">
        Sự khác biệt đối với loại hình văn phòng ảo là bạn và tất cả các nhân viên không nhất thiết 
        phải luôn ở tại văn phòng mà có thể làm việc ở bất cứ nơi nào khác. Chính vì vậy với dịch vụ 
        <b>văn phòng ảo giá rẻ</b> giúp các doanh nghiệp tiết kiệm đáng kể chi phí thuê văn phòng, 
        chi phí nhân viên lễ tân, các thiết bị văn phòng và các chi phí tiện ích khác…
      </p>
      <br/>
      <hr/>
      `,
    },
    {
      title: "Lợi ích của văn phòng ảo?",
      content: `
      <hr/>
      <p style="margin-top: 10px;">
        Đối với các doanh nghiệp mới thành lập, việc sử dụng văn phòng ảo là một biện pháp tối 
        ưu hóa được chi phí vốn đầu tư ban đầu. Với mức độ đắt đỏ ở các thành phố lớn như Hà Nội 
        về tất cả các mặt hàng thì việc mua được một căn nhà đặt trụ sở là việc hết sức khó khăn 
        cho doanh nghiệp.
      </p>
      <p style="margin-top: 10px;">
        Thuê văn phòng ảo tiết kiệm kinh phí, không cần phải chuẩn bị số vốn lớn để thuê văn phòng 
        dài hạn, không cần lo về chi phí bỏ ra để mua sắm trang thiết bị văn phòng, chi trả dịch 
        vụ văn phòng. Với một mức giá nhất định phù hợp với từng nhu cầu từng doanh nghiệp, văn 
        phòng ảo luôn đáp ứng được những tiêu chuẩn và dịch vụ chất lượng và hiện đại nhất.
      </p>
      <ul style="margin-top: 15px;">
        <li>
          Khi đăng ký văn phòng ảo, doanh nghiệp sẽ nghiễm nhiên có một địa chỉ thuận tiện và 
          chuyên nghiệp, đội ngũ lễ tân và nhân viên đại diện năng động – nhiệt tình – trách nhiệm cao. 
          Văn phòng ảo cũng là nơi nhận bưu thư, bưu phẩm, tiếp khách và xử lý các công việc trong phạm 
          vi cho phép khi doanh nghiệp vắng mặt.
        </li>
        <li style="margin-top: 5px;">
          Được sử dụng các trang thiết bị văn phòng tiện lợi, sang trọng và hiện đại như: Bàn làm việc, 
          ghế ngồi, tủ đựng hồ sơ, tủ đựng tài liệu, điện thoại bàn riêng, số fax riêng.
        </li>
        <li style="margin-top: 5px;">
          Sử dụng dịch vụ tại đơn vị <b>kinh doanh cho thuê văn phòng ảo</b> doanh nghiệp được miễn phí 
          truy cập internet tốc độ cao, bình nước nóng/lạnh, điều hòa trong giờ làm việc.
        </li>
        <li style="margin-top: 5px;">
          Không gian làm việc rộng rãi, thoáng mát, chuyên nghiệp và hiện đại. Đây là một yếu 
          tố giúp bạn nâng cao hình ảnh trong mắt đối tác và khách hàng.
        </li>
        <li style="margin-top: 5px;">
          Các địa chỉ văn phòng ảo thường nằm tại các mặt tiền của các dãy phố lớn. Gần kề với các 
          doanh nghiệp lớn trong nước, có các ngân hàng, nhà hàng, khách sạn bên cạnh nên rất thuận 
          tiện trong việc tiếp khách, ăn uống, nghỉ ngơi.
        </li>
      </ul>
      <br/>
      <hr/>
      `,
    },
    {
      title: "Văn phòng ảo phù hợp với những đối tượng nào?",
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
      title: "Văn phòng ảo có được đăng kí kinh doanh?",
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
      title: "Có nên thuê văn phòng ảo không?",
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
      title: "Những địa điểm cho thuê văn phòng ảo của Sky Office?",
      content: `
      <hr/>
      <p style="margin-top: 15px;">
        Với gần 10 năm trong lĩnh vực <b>cho thuê văn phòng</b> cùng hệ thống 5 cơ sở tại những vị trí đắc 
        địa (trung tâm thành phố Hà Nội) của Sky Office chắc chắn sẽ đáp ứng đa dạng các nhu cầu 
        khác nhau của Quý khách hàng:
      </p>
      <p style="margin-top: 15px;">
        Danh sách các văn phòng ảo tại Sky Office:
      </p>
      <ol style="margin-top: 15px; font-weight: 500">
        <li>
          Cho thuê văn phòng ảo tại Hoàn Kiếm: .................
        </li>
        <li style="margin-top: 10px;">
         Cho thuê văn phòng ảo tại Hoàn Kiếm: .................
        </li>
        <li style="margin-top: 10px;">
          Cho thuê văn phòng ảo tại Đống Đa: .................
        </li>
        <li style="margin-top: 10px;">
        Cho thuê văn phòng ảo tại Thanh Xuân: .................
        </li>
        <li style="margin-top: 10px;">
        Cho thuê văn phòng ảo tại Hà Đông: .................
        </li>
      </ol>
      <br/>
      <hr/>
      `,
    },
  ];

  const toggleContent1 = (index) => {
    setActiveIndex1(index === activeIndex1 ? null : index);
  };

  const toggleContent2 = (index) => {
    setActiveIndex2(index === activeIndex2 ? null : index);
  };

  return (
    <div className="VPAmain3-container">
      <div className="VPA-text-box">
        <h2 style={{ color: "black" }}>TÌM HIỂU VỀ VĂN PHÒNG ẢO</h2>
        <br />
        <hr />
        <p className="VPA-text" style={{ fontSize: "14px" }}>
          <b>Dịch Vụ Cho Thuê Văn Phòng Ảo</b> tại sao lại có thể đáp ứng được
          tất cả mong muốn của các doanh nghiệp? Tại sao doanh nghiệp lại cần
          đến một
          <b> Văn Phòng Ảo</b>? 5 lý do sau đây sẽ giải thích những thắc mắc
          này:
        </p>
      </div>
      <div className="VPAaccordion1">
        <div className="VPAaccordion1-titles">
          {items1.map((item, index) => (
            <div
              key={index}
              className={`VPAaccordion1-title ${
                activeIndex1 === index ? "active" : ""
              }`}
              onClick={() => toggleContent1(index)}
            >
              {item.title}
            </div>
          ))}
        </div>
        <hr />
        <div className="VPAaccordion1-content">
          {activeIndex1 !== null && (
            <div
              className="VPAcustom1-content"
              dangerouslySetInnerHTML={{ __html: items1[activeIndex1].content }}
            />
          )}
        </div>
      </div>
      <br />
      <br />
      <h2>NHỮNG CÂU HỎI THƯỜNG GẶP VỀ GIẢI PHÁP CHO THUÊ VĂN PHÒNG ẢO</h2>
      <br />
      <div className="VPAaccordion2">
        {items2.map((item, index) => (
          <div key={index}>
            <div
              className={`VPAaccordion2-title ${
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
                className="VPAcustom2-content"
                dangerouslySetInnerHTML={{ __html: item.content }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default VPAMain3;
