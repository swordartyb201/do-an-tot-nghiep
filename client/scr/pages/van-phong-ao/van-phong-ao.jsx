import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import MenuList from "../../components/menubar/MenuBar";
import VPAsearch from "../../components/van-phong-ao/VPAsearch/VPAsearch";
import VPABanner1 from "../../components/van-phong-ao/VPAbanner1/VPAbanner1";
import VPAMain1 from "../../components/van-phong-ao/VPAMain1/VPAMain1";
import VPABanner2 from "../../components/van-phong-ao/VPAbanner2/VPAbanner2";
import VPAMain2 from "../../components/van-phong-ao/VPAMain2/VPAMain2";
import VPAMain3 from "../../components/van-phong-ao/VPAMain3/VPAMain3";
import "./van-phong-ao.css";

const VPao = () => {
  return (
    <div className="vpao">
      <Navbar />
      <MenuList />
      <VPAsearch />
      <VPABanner1 />
      <VPAMain1 />
      <VPABanner2 />
      <VPAMain2 />
      <VPABanner1 />
      <VPAMain3 />
      <Footer />
    </div>
  );
};

export default VPao;
