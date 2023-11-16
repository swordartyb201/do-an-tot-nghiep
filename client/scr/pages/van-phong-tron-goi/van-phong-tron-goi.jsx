import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import MenuList from "../../components/menubar/MenuBar";
import VPTGsearch from "../../components/van-phong-tron-goi/VPTGsearch/VPTGsearch";
import VPTGBanner1 from "../../components/van-phong-tron-goi/VPTGbanner1/VPTGbanner1";
import VPTGMain1 from "../../components/van-phong-tron-goi/VPTGMain1/VPTGMain1";
import VPTGBanner2 from "../../components/van-phong-tron-goi/VPTGbanner2/VPTGbanner2";
import VPTGMain3 from "../../components/van-phong-tron-goi/VPTGMain3/VPTGMain3";
import Featured from "../../components/featured/Featured";
import "./van-phong-tron-goi.css";

const VPTG = () => {
  return (
    <div className="vptg">
      <Navbar />
      <MenuList />
      <VPTGsearch />
      <VPTGBanner1 />
      <VPTGMain1 />
      <Featured />
      <VPTGMain3 />
      <VPTGBanner2 />
      <Footer />
    </div>
  );
};

export default VPTG;
