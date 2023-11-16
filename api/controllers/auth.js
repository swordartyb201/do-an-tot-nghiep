import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    // Kiểm tra nếu các trường thông tin bắt buộc (username, password, email, phone) không được gửi lên
    if (
      !req.body.username ||
      !req.body.email ||
      !req.body.phone ||
      !req.body.password
    ) {
      return res
        .status(400)
        .json({ message: "Tên đăng nhập, mật khẩu và email là bắt buộc" });
    }

    // Kiểm tra nếu đã tồn tại người dùng với tên đăng nhập đã cung cấp
    const existingUser = await User.findOne({ username: req.body.username });
    if (existingUser) {
      return res.status(400).json({ message: "Tên đăng nhập đã tồn tại" });
    }

    const existingEmail = await User.findOne({ email: req.body.email });
    if (existingEmail) {
      return res.status(400).json({ message: "Email đã tồn tại" });
    }

    // Tạo một đối tượng người dùng mới với thông tin cung cấp và mật khẩu đã mã hóa
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      phone: req.body.phone,
      password: hash,
    });

    // Lưu người dùng mới vào cơ sở dữ liệu
    await newUser.save();
    res.status(200).send("Tài khoản đã được tạo");
  } catch (err) {
    next(err);
  }
};
export const login = async (req, res, next) => {
  try {
    // Tìm người dùng với tên đăng nhập đã cung cấp
    const user = await User.findOne({ username: req.body.username });
    if (!user) return next(createError(404, "Tài khoản không tồn tại!"));

    // So sánh mật khẩu đã cung cấp với mật khẩu đã mã hóa trong cơ sở dữ liệu
    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect)
      return next(createError(400, "Sai tài khoản hoặc mật khẩu!"));

    // Tạo mã thông báo JWT với dữ liệu người dùng và khóa bí mật
    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT
    );

    const { password, isAdmin, ...otherDetails } = user._doc;
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({ details: { ...otherDetails }, isAdmin });
  } catch (err) {
    next(err);
  }
};
