import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import MenuList from "../../components/menubar/MenuBar";
import GTbanner from "../../components/gioi-thieu/GTbanner/GTbanner";
import GTmain from "../../components/gioi-thieu/GTmain/GTmain";
import "./gioi-thieu.css";

const GT = () => {
  return (
    <div className="gthieu">
      <Navbar />
      <MenuList />
      <GTbanner />
      <GTmain />
      <Footer />
    </div>
  );
};

export default GT;
