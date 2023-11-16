import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Space from "./pages/space/Space";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import Register from "./pages/register/register";
import VPao from "./pages/van-phong-ao/van-phong-ao";
import VPTG from "./pages/van-phong-tron-goi/van-phong-tron-goi";
import GT from "./pages/gioi-thieu/gioi-thieu";
import LH from "./pages/lien-he/lien-he";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/spaces" element={<List />} />
        <Route path="/spaces/:id" element={<Space />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/van-phong-ao" element={<VPao />} />
        <Route path="/van-phong-tron-goi" element={<VPTG />} />
        <Route path="/gioi-thieu" element={<GT />} />
        <Route path="/lien-he" element={<LH />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
