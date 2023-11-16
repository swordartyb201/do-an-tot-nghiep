import express from "express";
import {
  createRoom,
  deleteRoom,
  getRoom,
  getRooms,
  updateRoom,
  updateRoomAvailability,
  getRoomsByType,
} from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();
//CREATE
router.post("/:spaceid", verifyAdmin, createRoom);

//UPDATE
router.put("/:id", verifyAdmin, updateRoom);
router.put("/availability/:id", updateRoomAvailability);
//DELETE
router.delete("/:id/:spaceid", verifyAdmin, deleteRoom);
//GET

router.get("/:id", getRoom);
//GET ALL
router.get("/type/:roomType", getRoomsByType);
router.get("/", getRooms);

export default router;
