import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./login.css";
import logoImage from "../../img/logo.png";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate()

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      navigate("/")
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  return (
    <div className="login-container">
      <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
        <img src={logoImage} alt="Logo" className="lLogo" />
      </Link>
      <div className="login">
        <div className="lContainer">
          <h1 className="ltext">Đăng nhập</h1>
          <div className="divider"></div>
            <input
              type="text"
              placeholder="Tên đăng nhập"
              id="username"
              onChange={handleChange}
              className="lInput"
            />
            <input
              type="password"
              placeholder="Mật khẩu"
              id="password"
              onChange={handleChange}
              className="lInput"
            />
            <a className="forgotPassword" href="/forgotPassword">Quên mật khẩu?</a>
            <button disabled={loading} onClick={handleClick} className="lButton">
              Đăng nhập
            </button>
            {error && <span>{error.message}</span>}
            <div className="divider"></div>
            <div className="notAMember">
            Bạn chưa là thành viên? <a href="/register" className="rlink" style={{  textDecoration: "none" }}> Đăng kí </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
