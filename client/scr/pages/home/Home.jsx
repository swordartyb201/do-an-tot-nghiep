import Featured from "../../components/featured/Featured";
import Footer from "../../components/footer/Footer";
import Slider from "../../components/home/slider/Slider";
import HomeSearch from "../../components/home/homeSearch/homeSearch";
import Navbar from "../../components/navbar/Navbar";
import MenuList from "../../components/menubar/MenuBar";
import Main1 from "../../components/home/main1/Main1";
import Main2 from "../../components/home/main2/Main2";
import AboutUs from "../../components/home/aboutUs/aboutUs";
import Banner1 from "../../components/home/banner1/banner1";
import BannerContact from "../../components/home/bannerContact/bannerContact";

import "./home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <MenuList />
      <div className="homeHeader">
        <div className="homeSearch">
          <HomeSearch />
        </div>
        <div className="homeSlider">
          <Slider />
        </div>
      </div>
      <div className="homeContainer">
        <BannerContact />
        <Main1 />
        <Featured />
        <Main2 />
        <Banner1 />
        <AboutUs />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
