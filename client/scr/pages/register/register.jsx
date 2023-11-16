import axios from "axios";
import { useContext, useState} from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./register.css";
import logoImage from "../../img/logo.png";

const Register = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
  });

  const [errorMessages, setErrorMessages] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const { loading, error, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setCredentials((prev) => ({ ...prev, [id]: value }));
    if (id === "username") {
      // Kiểm tra điều kiện cho username
      const usernamePattern = /^[a-zA-Z0-9]{5,20}$/;
      if (!usernamePattern.test(value)) {
        setErrorMessages((prev) => ({ ...prev, username: "Tên đăng nhập không hợp lệ" }));
      } else {
        setErrorMessages((prev) => ({ ...prev, username: "" }));
      }
    } else if (id === "email") {
      // Kiểm tra điều kiện cho email
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailPattern.test(value)) {
        setErrorMessages((prev) => ({ ...prev, email: "Email không hợp lệ" }));
      } else {
        setErrorMessages((prev) => ({ ...prev, email: "" }));
      }
    } else if (id === "phone") {
      // Kiểm tra điều kiện cho số điện thoại
      const phonePattern = /^[0-9]{10,12}$/;
      if (!phonePattern.test(value)) {
        setErrorMessages((prev) => ({ ...prev, phone: "Số điện thoại không hợp lệ" }));
      } else {
        setErrorMessages((prev) => ({ ...prev, phone: "" }));
      }
    } else if (id === "password") {
      // Kiểm tra điều kiện cho mật khẩu
      if (value.length < 6) {
        setErrorMessages((prev) => ({ ...prev, password: "Mật khẩu phải có ít nhất 6 ký tự" }));
      } else {
        setErrorMessages((prev) => ({ ...prev, password: "" }));
      }
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    if (Object.values(errorMessages).some((message) => message !== "")) {
      alert("Vui lòng kiểm tra và nhập đúng dữ liệu.");
      return;
    }
    dispatch({ type: "REGISTER_START" });
    try {
      const res = await axios.post("/auth/register", credentials);
      dispatch({ type: "REGISTER_SUCCESS", payload: res.data.details });
      navigate("/login");
    } catch (err) {
      dispatch({ type: "REGISTER_FAILURE", payload: err.response.data });
    }
  };

  return (
    <div className="register-container">
       <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
        <img src={logoImage} alt="Logo" className="RLogo" />
      </Link>
      <div className="register">
      <div className="rContainer">
          <h1 className="rtext">Đăng kí</h1>
          <div className="divider"></div>
          <input
            type="text"
            placeholder="Tên đăng nhập"
            id="username"
            onChange={handleChange}
            className="rInput"
          />
          <span className="errorMessage">{errorMessages.username}</span>
          <input
            type="text"
            placeholder="Email"
            id="email"
            onChange={handleChange}
            className="rInput"
          />
          <span className="errorMessage">{errorMessages.email}</span>
          <input
            type="text"
            placeholder="Số điện thoại"
            id="phone"
            onChange={handleChange}
            className="rInput"
          />
          <span className="errorMessage">{errorMessages.phone}</span>
          <input
            type="password"
            placeholder="Mật khẩu"
            id="password"
            onChange={handleChange}
            className="rInput"
          />
          <span className="errorMessage">{errorMessages.password}</span>
          <button disabled={loading} onClick={handleClick} className="rButton">
            Đăng kí
          </button>
          {error && <span className="errorText">{error.message}</span>}
          <div className="divider"></div>
          <div className="hasMember">
            Bạn đã là thành viên? <a className="rLogin" href="/login" style={{textDecoration: "none" }}> Đăng nhập </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
