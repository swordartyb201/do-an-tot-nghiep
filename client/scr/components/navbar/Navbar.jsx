import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import logoImage from "../../img/logo.png";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navbar__container-top">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <img src={logoImage} alt="Logo" className="navbar__logo" />
        </Link>
        <div className="navbar__items-top">
          {user ? (
            <>
              <span className="navbar__username">
                Xin chào, {user.username}
              </span>
              <button className="navbar__button-top" onClick={logout}>
                Đăng xuất
              </button>
            </>
          ) : (
            <>
              <Link
                to="/register"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <button className="navbar__button-top">Đăng kí</button>
              </Link>
              <Link
                to="/login"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <button className="navbar__button-top">Đăng nhập</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
