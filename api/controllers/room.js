import Room from "../models/Room.js";
import Space from "../models/Space.js";
import { createError } from "../utils/error.js";

export const createRoom = async (req, res, next) => {
  const spaceId = req.params.spaceid;
  const newRoom = new Room(req.body);

  try {
    const savedRoom = await newRoom.save();
    try {
      await Space.findByIdAndUpdate(spaceId, {
        $push: { rooms: savedRoom._id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json(savedRoom);
  } catch (err) {
    next(err);
  }
};

export const updateRoom = async (req, res, next) => {
  try {
    const updatedRoom = await Room.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedRoom);
  } catch (err) {
    next(err);
  }
};

export const updateRoomAvailability = async (req, res, next) => {
  try {
    await Room.updateOne(
      { "roomNumbers._id": req.params.id },
      {
        $set: {
          "roomNumbers.$.unavailableDates": req.body.dates,
        },
      }
    );

    res.status(200).json("Trang thai phong da duoc cap nhat");
  } catch (err) {
    console.error(err);
    res.status(500).json("Co loi khi cap nhat trang thai phong");
    next(err);
  }
};

export const deleteRoom = async (req, res, next) => {
  const spaceId = req.params.spaceid;
  const room = await Room.findById(req.params.id);
  if (!room) {
    return res.status(404).json("Không tìm thấy phòng.");
  }

  try {
    await Room.findByIdAndDelete(req.params.id);
    try {
      await Space.findByIdAndUpdate(spaceId, {
        $pull: { rooms: req.params.id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json("Phong da duoc xoa");
  } catch (err) {
    console.error(err);
    res.status(500).json("Đã xảy ra lỗi khi xóa phòng.");
    next(err);
  }
};

const validRoomTypes = [
  "Văn phòng ảo",
  "Văn phòng trọn gói",
  "Phòng họp",
  "Phòng họp trực tuyến",
];
export const getRoomsByType = async (req, res, next) => {
  const { roomType } = req.params;

  try {
    // Kiểm tra xem roomType có trong danh sách hợp lệ không
    if (!validRoomTypes.includes(roomType)) {
      return res.status(400).json({ error: "Loai phong khong hop le" });
    }

    // Nếu hợp lệ, thực hiện tìm kiếm phòng
    const rooms = await Room.find({ type: roomType });
    res.status(200).json(rooms);
  } catch (err) {
    next(err);
  }
};

export const getRoom = async (req, res, next) => {
  try {
    const room = await Room.findById(req.params.id);
    res.status(200).json(room);
  } catch (err) {
    next(err);
  }
};

export const getRooms = async (req, res, next) => {
  try {
    const rooms = await Room.find();
    res.status(200).json(rooms);
  } catch (err) {
    next(err);
  }
};
